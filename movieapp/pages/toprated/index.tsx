import React from "react";
import { PopularMovies } from "../../types";
import { InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import styles from "../../styles/TopRatedMoviesPage.module.css";
import Head from "next/head";

const TopRatedMoviesPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.innerContainer}>
      <Head>
        <title>BBMovies | Top Rated Movies</title>
        <meta name="description" content="Top rated movies" />
      </Head>
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const { results }: PopularMovies = await res.json();

  return {
    props: {
      results,
    },
  };
};

export default TopRatedMoviesPage;
