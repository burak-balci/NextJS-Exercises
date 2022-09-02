import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <Link href="/">BB Movies</Link>
        </div>
        <input className={styles.input} type="text" />
      </div>
    </div>
  );
};

export default Header;
