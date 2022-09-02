import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src="https://image.tmdb.org/t/p/original/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
          alt="asfsa"
        />
      </div>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>House of the Dragon</h3>
      </div>
    </div>
  );
};

export default Card;
