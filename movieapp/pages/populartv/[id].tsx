import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps } from "next";
import styles from "../../styles/PopularTvDetailPage.module.css";
import { MovieDetails, Result } from "../../types";
import Head from "next/head";

const PopularTvDetailPage = ({ data }: { data: MovieDetails }) => {
  const route = useRouter();
  const filtered = data.results.filter(
    (item: Result) => Number(item.id) === Number(route.query.id)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>BBMovies | {filtered[0].title || filtered[0].name}</title>
        <meta name="description" content={`${filtered[0].title} detail`} />
      </Head>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${filtered[0].backdrop_path})`,
        }}
      ></div>
      <div className={styles.title}>
        {filtered[0].title || filtered[0].name}
      </div>
      <div className={styles.desc}>{filtered[0].overview}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default PopularTvDetailPage;
