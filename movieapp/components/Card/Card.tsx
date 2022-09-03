import React from "react";
import styles from "./Card.module.css";
import { Result } from "../../types";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IProps {
  movie: Result;
}

const Card = ({ movie }: IProps) => {
  const { route } = useRouter();

  if (route == "/populartv") {
    return (
      <Link href={`/populartv/${movie.id}`}>
        <a className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`${movie.title}'s image`}
            />
          </div>
          <div className={styles.innerContainer}>
            <h3 className={styles.title}>{movie.name}</h3>
          </div>
        </a>
      </Link>
    );
  }
  if (route == "/toprated") {
    return (
      <Link href={`/toprated/${movie.id}`}>
        <a className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`${movie.title}'s image`}
            />
          </div>
          <div className={styles.innerContainer}>
            <h3 className={styles.title}>{movie.name}</h3>
          </div>
        </a>
      </Link>
    );
  }
  return (
    <Link href={`/moviedetail/${movie.id}`}>
      <a className={styles.container}>
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
      </a>
    </Link>
  );
};

export default Card;
