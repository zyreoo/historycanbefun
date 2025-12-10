"use client";

import styles from "./map.module.css";
import { useState, useEffect, useRef } from "react";
import { createWorker } from "tesseract.js";

const eventLocations = [
  {
    id: 1,
    city: "Bucharest",
    lat: 44.4268,
    lng: 26.1025,
    event: "1989 Revolution",
    description: "The Romanian Revolution began here. Ceausescu's final speech was interrupted by protests, leading to his downfall.",
    year: "1989"
  },
  {
    id: 2,
    city: "Timișoara",
    lat: 45.7489,
    lng: 21.2087,
    event: "Revolution Begins",
    description: "The revolution started in Timișoara when protests broke out to defend a Hungarian pastor, sparking nationwide uprising.",
    year: "1989"
  },
  {
    id: 3,
    city: "Sibiu",
    lat: 45.7874,
    lng: 24.1433,
    event: "Dej's Early Activities",
    description: "Important communist organizing center during the early years of the regime.",
    year: "1940s-1950s"
  },
  {
    id: 4,
    city: "Cluj-Napoca",
    lat: 46.7712,
    lng: 23.6236,
    event: "Student Protests",
    description: "Site of significant student protests and resistance during the communist era.",
    year: "1956, 1968"
  },
  {
    id: 5,
    city: "Iași",
    lat: 47.1585,
    lng: 27.6014,
    event: "Industrial Development",
    description: "Major industrial center developed under Dej's industrialization policies.",
    year: "1950s-1960s"
  }
];

function normalizeCityName(name) {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export default function Map() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [detectedCities, setDetectedCities] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const imageRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const detectCities = async () => {
      if (!imageRef.current || !mapContainerRef.current) return;

      setIsProcessing(true);
      setProcessingProgress(0);

      try {
        if (!imageRef.current.complete || imageRef.current.naturalWidth === 0) {
          return;
        }

        const worker = await createWorker('ron+eng');
        
        setProcessingProgress(50);
        
        const result = await worker.recognize(imageRef.current);

        await worker.terminate();
        
        let words = result?.data?.words || 
                   result?.words || 
                   result?.data?.symbols?.filter(s => s.text && s.text.trim().length > 2) || 
                   [];
        
        if (words.length === 0 && result?.data?.lines) {
          words = result.data.lines.flatMap(line => line.words || []);
        }
        
        if (words.length === 0 && result?.data?.blocks) {
          words = result.data.blocks.flatMap(block => 
            block.paragraphs?.flatMap(para => 
              para.lines?.flatMap(line => line.words || []) || []
            ) || []
          );
        }
        
        if (words.length === 0) {
          const romaniaBounds = {
            minLat: 43.7,
            maxLat: 48.2,
            minLng: 20.2,
            maxLng: 29.7
          };
          
          const detected = eventLocations.map(loc => {
            const xPercent = ((loc.lng - romaniaBounds.minLng) / (romaniaBounds.maxLng - romaniaBounds.minLng)) * 100;
            const yPercent = 100 - ((loc.lat - romaniaBounds.minLat) / (romaniaBounds.maxLat - romaniaBounds.minLat)) * 100;
            
            return {
              city: loc.city,
              x: Math.max(5, Math.min(95, xPercent)),
              y: Math.max(5, Math.min(95, yPercent)),
              event: loc
            };
          });
          
          setDetectedCities(detected);
          return;
        }

        const imgRect = imageRef.current.getBoundingClientRect();
        const containerRect = mapContainerRef.current.getBoundingClientRect();
        
        const detected = [];
        const cityNames = eventLocations.map(loc => ({
          normalized: normalizeCityName(loc.city),
          original: loc.city,
          data: loc
        }));

        words.forEach(word => {
          if (!word || !word.text || !word.bbox) {
            return;
          }

          const normalizedText = normalizeCityName(word.text);
          
          const matchedCity = cityNames.find(city => 
            normalizedText.includes(city.normalized) || 
            city.normalized.includes(normalizedText)
          );

          if (matchedCity && word.confidence > 30 && word.bbox && 
              typeof word.bbox.x0 !== 'undefined' && typeof word.bbox.x1 !== 'undefined' &&
              typeof word.bbox.y0 !== 'undefined' && typeof word.bbox.y1 !== 'undefined') {
            const imgNaturalWidth = imageRef.current.naturalWidth || imgRect.width;
            const imgNaturalHeight = imageRef.current.naturalHeight || imgRect.height;
            
            const x = ((word.bbox.x0 + word.bbox.x1) / 2) / imgNaturalWidth * 100;
            const y = ((word.bbox.y0 + word.bbox.y1) / 2) / imgNaturalHeight * 100;
            
            const existing = detected.find(d => d.city === matchedCity.original);
            if (!existing) {
              detected.push({
                city: matchedCity.original,
                x: x,
                y: y,
                event: matchedCity.data
              });
            }
          }
        });

        setDetectedCities(detected);
      } catch (error) {

      } finally {
        setIsProcessing(false);
        setProcessingProgress(0);
      }
    };

    const checkAndProcess = () => {
      if (imageRef.current && 
          imageRef.current.complete && 
          imageRef.current.naturalWidth > 0 &&
          imageRef.current.naturalHeight > 0) {
        detectCities();
      }
    };

    if (imageRef.current) {
      if (imageRef.current.complete && 
          imageRef.current.naturalWidth > 0) {
        setTimeout(checkAndProcess, 100);
      } else {
        imageRef.current.onload = checkAndProcess;
        imageRef.current.onerror = () => {
        };
      }
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
        imageRef.current.onerror = null;
      }
    };
  }, []);

  const handleCityClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Interactive Map of Events</h1>
      <p className={styles.subtitle}>Click on a city to learn about important events</p>
      
      {isProcessing && (
        <div className={styles.processing}>
          <p>Detecting cities on map... {processingProgress}%</p>
        </div>
      )}

      <div ref={mapContainerRef} className={styles.mapContainer}>
        <div className={styles.map}>
          <div className={styles.imageWrapper}>
            <img 
              ref={imageRef}
              src="/romania_map.png" 
              alt="Romania Map"
              className={styles.romaniaMapImage}
            />
            
            {detectedCities.map((detected, index) => (
              <div
                key={index}
                className={styles.markerContainer}
                style={{
                  left: `${detected.x}%`,
                  top: `${detected.y}%`,
                }}
              >
                <button
                  className={styles.marker}
                  onClick={() => handleCityClick(detected.event)}
                  aria-label={`${detected.city} - ${detected.event.event}`}
                >
                  <span className={styles.markerDot}></span>
                </button>
                <span className={styles.cityLabel}>{detected.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className={styles.eventInfo}>
          <button 
            className={styles.closeButton}
            onClick={() => setSelectedEvent(null)}
            aria-label="Close"
          >
            ×
          </button>
          <h2 className={styles.eventTitle}>{selectedEvent.city}</h2>
          <h3 className={styles.eventName}>{selectedEvent.event}</h3>
          <p className={styles.eventYear}>{selectedEvent.year}</p>
          <p className={styles.eventDescription}>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
}

