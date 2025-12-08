"use client";

import styles from "./timeline.module.css";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    title: "The beginning",
    description: "sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf"
  },
  {
    title: "The beginning",
    description: "sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf"
  },
  {
    title: "The beginning",
    description: "sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf"
  },
  {
    title: "The beginning",
    description: "sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf"
  }
];

export default function Home() {
  const itemRef = useRef([]);

  useEffect(() => {
    const observator = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else{
            entry.target.classList.remove(styles.show);
        }
      });
    });

    itemRef.current.forEach((el) => {
      if (el) observator.observe(el);
    });

    return () => observator.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.timelineContainer}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineDiv} ${index % 2 === 0 ? styles.left : styles.right}`}
              ref={(el) => (itemRef.current[index] = el)}
            >
              <h3 className={styles.title}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
