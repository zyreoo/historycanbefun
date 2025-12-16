"use client";

import styles from "./map.module.css";
import { useState } from "react";

const eventLocations = [
  {
    id: 1,
    city: "Bucharest",
    event: "1989 Revolution",
    description: "The Romanian Revolution began here. Ceausescu's final speech was interrupted by protests, leading to his downfall.",
    year: "1989"
  },
  {
    id: 2,
    city: "Timișoara",
    event: "Revolution Begins",
    description: "The revolution started in Timișoara when protests broke out to defend a Hungarian pastor, sparking nationwide uprising.",
    year: "1989"
  },
  {
    id: 3,
    city: "Sibiu",
    event: "Dej's Early Activities",
    description: "Important communist organizing center during the early years of the regime.",
    year: "1940s-1950s"
  },
  {
    id: 4,
    city: "Cluj-Napoca",
    event: "Student Protests",
    description: "Site of significant student protests and resistance during the communist era.",
    year: "1956, 1968"
  },
  {
    id: 5,
    city: "Iași",
    event: "Industrial Development",
    description: "Major industrial center developed under Dej's industrialization policies.",
    year: "1950s-1960s"
  }
];

const manualPositions = {
  "Bucharest": { x: 60, y: 84 },
  "Iași": { x: 71, y: 31 },
  "Timișoara": { x: 12, y: 58 },
  "Sibiu": { x: 38, y: 58 },
  "Cluj-Napoca": { x: 35, y: 40 }
};

export default function Map() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const cities = eventLocations.map(loc => {
    const position = manualPositions[loc.city];
    return {
      city: loc.city,
      x: position?.x || 50,
      y: position?.y || 50,
      event: loc
    };
  });

  const handleCityClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Interactive Map of Events</h1>
      <p className={styles.subtitle}>Click on a city to learn about important events</p>

      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <div className={styles.imageWrapper}>
            <img 
              src="/romania_map.png" 
              alt="Romania Map"
              className={styles.romaniaMapImage}
            />
            
            {cities.map((city, index) => (
              <div
                key={index}
                className={styles.markerContainer}
                style={{
                  left: `${city.x}%`,
                  top: `${city.y}%`,
                }}
              >
                <button
                  className={styles.marker}
                  onClick={() => handleCityClick(city.event)}
                  aria-label={`${city.city} - ${city.event.event}`}
                >
                  <span className={styles.markerDot}></span>
                </button>
                <span className={styles.cityLabel}>{city.city}</span>
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

