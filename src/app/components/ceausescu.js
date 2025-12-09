"use client";

import styles from "./dej.module.css";
import { useEffect, useRef } from "react";



export default function Home() {


    return(

        <div className={styles.page}>
            <h1 className={styles.title}>Lets continue with the second one</h1>
            <h2 className={styles.subtitle}>Ceausescu</h2>
            <div className={styles.content}>
                <img src="/ceausescupage.jpg" className={styles.image} />
                <div className={styles.info}>
                    <p>Nicolae Ceausescu (1918-1989) ruled Romania from 1965 until his execution in 1989. He rose through the communist ranks and became General Secretary after Gheorghe Gheorghiu-Dej's death.</p>
                    <p>Initially, Ceausescu appeared as a reformer, condemning the 1968 Soviet invasion of Czechoslovakia and establishing better relations with the West. However, he soon developed an extreme cult of personality, with propaganda portraying him and his wife Elena as near-deities.</p>
                    <p>His regime became increasingly repressive and economically disastrous. In the 1980s, he implemented severe austerity measures to pay off foreign debt, leading to food rationing, energy shortages, and widespread poverty while he lived in luxury.</p>
                    <p>Ceausescu's megalomania reached its peak with the construction of the massive Palace of the Parliament in Bucharest and the systematic destruction of historic neighborhoods. The Romanian Revolution of 1989 ended his rule, and he and Elena were executed on December 25, 1989, after a hasty trial.</p>
                </div>
            </div>
        </div>

    );
}


