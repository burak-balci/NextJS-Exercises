import React from "react";
import { PopularMovies } from "../../types";
import { InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import styles from "../../styles/PopularTvPage.module.css";
import Head from "next/head";

const PopularTvPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.innerContainer}>
      <Head>
        <title>BBMovies | Popular TV</title>
        <meta name="description" content="Popular TV" />
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
    https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const { results }: PopularMovies = await res.json();

  return {
    props: {
      results,
    },
  };
};

export default PopularTvPage;
