import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps } from "next";
import { PopularMovies, Result } from "../../types";
import styles from "../../styles/SearchPage.module.css";
import Card from "../../components/Card";
import Head from "next/head";

const SearchPage = ({ results }: { results: Result[] }) => {
  const route = useRouter();

  return (
    <div className={styles.innerContainer}>
      <Head>
        <title>BBMovies </title>
      </Head>
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${context.query.text}&page=1&include_adult=false`
  );
  const { results }: PopularMovies = await res.json();

  return {
    props: {
      results,
    },
  };
};

export default SearchPage;
