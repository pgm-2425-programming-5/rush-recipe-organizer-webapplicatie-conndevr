"use client"

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function Navigation() {
    const pathname = usePathname();

  return (
    <div>
        <nav>
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        </nav>

    </div>
  )
}
