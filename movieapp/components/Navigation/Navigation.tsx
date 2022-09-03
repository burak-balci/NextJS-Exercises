import Link from "next/link";
import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/toprated">
        <a className={styles.title}>Top Rated Movies</a>
      </Link>
      <Link href="/upcoming">
        <a className={styles.title}>Upcoming Movies</a>
      </Link>
      <Link href="/nowplaying">
        <a className={styles.title}>Now Playing Movies</a>
      </Link>
      <Link href="/populartv">
        <a className={styles.title}>Popular TV</a>
      </Link>
    </div>
  );
};

export default Navigation;
