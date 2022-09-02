import React from "react";
import styles from "./Card.module.css";
import { Result } from "../../types";

export interface IProps {
  movie: Result;
}

const Card = ({ movie }: IProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title}'s image`}
        />
      </div>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>{movie.title}</h3>
      </div>
    </div>
  );
};

export default Card;
