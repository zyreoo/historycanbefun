import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero";
import Timeline from "./components/timeline"
import Dej from "./components/dej"
import Ceausescu from "./components/ceausescu"
import Map from "./components/map"

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Dej />
      <Ceausescu />
      <Map />
    </>
  );
}
