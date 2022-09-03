import React from "react";
import { PopularMovies } from "../../types";
import { InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import styles from "../../styles/NowPlayingMoviesPage.module.css";
import Head from "next/head";

const NowPlayingMoviesPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.innerContainer}>
      <Head>
        <title>BBMovies | Now Playing Movies</title>
        <meta name="description" content="Now playing movies" />
      </Head>
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `
    
https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const { results }: PopularMovies = await res.json();

  return {
    props: {
      results,
    },
  };
};

export default NowPlayingMoviesPage;
