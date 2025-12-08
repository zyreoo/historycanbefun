import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero";
import Timeline from "./components/timeline"

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
    </>
  );
}
