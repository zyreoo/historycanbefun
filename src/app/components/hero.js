import styles from './hero.module.css';






export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title} >The leaders</h1>
        <h2 className={styles.title}>Dej vs Ceausescu</h2>
        
      </main>
    </div>
  );
}