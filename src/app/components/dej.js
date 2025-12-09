"use client";

import styles from "./dej.module.css";
import { useEffect, useRef } from "react";



export default function Home() {


    return(

        <div className={styles.page}>
            <h1 className={styles.title}>Lets start with the begging</h1>
            <h2 className={styles.subtitle}>Dej</h2>
            <div className={styles.content}>
                <img src="/dejpage.jpeg" className={styles.image} />
                <div className={styles.info}>
                    <p>Gheorghe Gheorghiu-Dej (1901-1965) was the first communist leader of Romania, ruling from 1947 until his death in 1965. Born into a working-class family, he became a railway worker and joined the Communist Party in 1930.</p>
                    <p>After World War II, with Soviet support, Dej helped establish the People's Republic of Romania. He implemented Stalinist policies including forced collectivization of agriculture, rapid industrialization, and the creation of a secret police force (Securitate) to suppress opposition.</p>
                    <p>Dej's regime was characterized by political purges, show trials, and the imprisonment of thousands in labor camps. Despite the harsh repression, he managed to maintain a degree of independence from Moscow, especially after Stalin's death in 1953.</p>
                    <p>His economic policies focused on heavy industry and infrastructure, but at great cost to the Romanian people. Dej died in 1965, leaving behind a legacy of authoritarian rule that would be continued and intensified by his successor, Nicolae Ceausescu.</p>
                </div>
            </div>
        </div>

    );
}


