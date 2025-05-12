"use client";
import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        {/* <ul className={styles.list}> */}
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "⭐️" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>{" "}
          {path === "/about-us" ? "⭐️" : ""}
        </li>
        {/* <li>
          <button onClick={() => setCount((e) => e + 1)}>{count}</button>
        </li> */}
      </ul>
    </nav>
  );
}
