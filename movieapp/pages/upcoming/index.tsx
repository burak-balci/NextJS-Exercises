import React from "react";
import { PopularMovies } from "../../types";
import { InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import styles from "../../styles/UpcomingMoviesPage.module.css";

const UpcomingMoviesPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(results);
  return (
    <div className={styles.innerContainer}>
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const { results }: PopularMovies = await res.json();

  return {
    props: {
      results,
    },
  };
};

export default UpcomingMoviesPage;
