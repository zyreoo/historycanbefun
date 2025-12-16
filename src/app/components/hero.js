"use client";

import styles from "./hero.module.css";
import { useEffect, useRef } from "react";









export default function Home() {

  const itemRef = useRef([]);
  useEffect(() => {
    const observator = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.showen);
        } else{
            entry.target.classList.remove(styles.showen);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    setTimeout(() => {
      itemRef.current.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            el.classList.add(styles.showen);
          }
          observator.observe(el);
        }
      });
    }, 100);

    return () => observator.disconnect();
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title} >The <span className={styles.underlined}>leaders</span></h1>
        <h2 className={styles.title}>Dej & Ceausescu</h2>
        <img src="/gheorghegheorgiu.jpeg" className={styles.dej} ref={(el) => (itemRef.current[0] = el)}/>
        <img src={encodeURI("/Nicolae_Ceausescu.jpg")} className={styles.ceausescu} ref={(el) => (itemRef.current[1] = el)} />
        
      </main>
    </div>
  );
}