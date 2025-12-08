"use client";

import styles from "./timeline.module.css";
import { useEffect, useRef } from "react";

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
          <div
            className={styles.timelineDiv}
            ref={(el) => (itemRef.current[0] = el)}
          >
            <h3 className={styles.title}>The beginning</h3>
            <p>
              sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn
              sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf
            </p>
          </div>

          <div
            className={styles.timelineDiv}
            ref={(el) => (itemRef.current[1] = el)}
          >
            <h3 className={styles.title}>The beginning</h3>
            <p>
              sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn
              sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf
            </p>
          </div>
          <div
            className={styles.timelineDiv}
            ref={(el) => (itemRef.current[2] = el)}
          >
            <h3 className={styles.title}>The beginning</h3>
            <p>
              sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn
              sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf
            </p>
          </div>

          <div
            className={styles.timelineDiv}
            ref={(el) => (itemRef.current[3] = el)}
          >
            <h3 className={styles.title}>The beginning</h3>
            <p>
              sahdbafdfbdshjnf nsdnh sjdnfdnhsfjndnfbhjn
              sdfbhdsjnfsdbnjfsdjfsdbfijenfjfebjwefwf
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
