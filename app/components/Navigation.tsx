"use client"

import { usePathname } from "next/navigation";
import Link from "next/link"
import styles from '../page.module.css';


export default function Navigation() {
    const pathname = usePathname();

  return (
    <div className={styles.navContainer}>
        <nav className={styles.nav} >
        <Link  href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        </nav>

    </div>
  )
}
