
"use client";
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <p className={styles.welcomeText}>Welcome to Njummy</p>
        <Link href="/recipes" passHref>
          <button className={styles.button}>Go to Recipes</button>
        </Link>
      </section>

    </div>
  );
}
