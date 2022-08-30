import Link from "next/link";
import React from "react";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href="/">
          <a className={styles.title}>BBFood</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
