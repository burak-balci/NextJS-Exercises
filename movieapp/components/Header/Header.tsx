import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>BB Movies</div>
        <input className={styles.input} type="text" />
      </div>
    </div>
  );
};

export default Header;
