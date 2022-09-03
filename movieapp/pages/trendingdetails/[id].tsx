import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps } from "next";
import { Result, TopRated } from "../../types";
import styles from "../../styles/TvDetailsPage.module.css";
import Head from "next/head";

const TvDetailsPage = ({ data }: { data: TopRated }) => {
  const route = useRouter();
  const filtered = data.results.filter(
    (item: Result) => Number(item.id) === Number(route.query.id)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>BBMovies | {filtered[0].name || filtered[0].title}</title>
        <meta
          name="description"
          content={`${filtered[0].name || filtered[0].title} detail`}
        />
      </Head>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${filtered[0].backdrop_path})`,
        }}
      ></div>
      <div className={styles.title}>
        {filtered[0].name || filtered[0].title}
      </div>
      <div className={styles.desc}>{filtered[0].overview}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default TvDetailsPage;
