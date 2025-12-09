"use client";

import styles from "./timeline.module.css";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    title: "1945 - The Rise of Communism",
    description: "After World War II, Romania falls under Soviet influence. The Communist Party, led by Gheorghe Gheorghiu-Dej, begins to consolidate power with Soviet backing."
  },
  {
    title: "1947 - Dej's First Victory",
    description: "King Michael I is forced to abdicate. The People's Republic of Romania is established. Gheorghe Gheorghiu-Dej becomes the de facto leader, beginning his 18-year rule."
  },
  {
    title: "1952 - Dej Consolidates Power",
    description: "Gheorghe Gheorghiu-Dej becomes General Secretary of the Romanian Workers' Party. He purges rivals and establishes a Stalinist regime, implementing forced industrialization and collectivization."
  },
  {
    title: "1965 - The End of Dej Era",
    description: "Gheorghe Gheorghiu-Dej dies in March 1965. His death marks the end of an era and opens the path for a new generation of communist leaders."
  },
  {
    title: "1965 - Ceausescu Takes Power",
    description: "Nicolae Ceausescu becomes General Secretary of the Romanian Communist Party. Initially seen as a reformer, he promises a more independent path from the Soviet Union."
  },
  {
    title: "1968 - Ceausescu's Defiance",
    description: "Ceausescu condemns the Soviet invasion of Czechoslovakia, gaining popularity at home and in the West. This marks Romania's most independent period from Moscow."
  },
  {
    title: "1974 - The Cult of Personality",
    description: "Ceausescu becomes President of Romania. His cult of personality intensifies, with massive propaganda campaigns and grandiose building projects like the Palace of the Parliament."
  },
  {
    title: "1980s - Economic Decline",
    description: "Ceausescu's policies lead to severe economic hardship. Austerity measures, food rationing, and energy shortages create widespread suffering while he builds his personal empire."
  },
  {
    title: "1989 - The Fall",
    description: "The Romanian Revolution begins in Timișoara and spreads to Bucharest. Nicolae Ceausescu and his wife Elena are captured, tried, and executed on December 25, 1989, ending 45 years of communist rule."
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
