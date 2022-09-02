import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popular Movies</div>
      <div className={styles.title}>Top Rated Movies</div>
      <div className={styles.title}>Upcoming Movies</div>
      <div className={styles.title}>Now Playing Movies</div>
      <div className={styles.title}>Trending Movie & TV</div>
    </div>
  );
};

export default Navigation;
