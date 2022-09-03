import { useRouter } from "next/router";
import React from "react";
import type { InferGetStaticPropsType } from "next";
import { Result } from "../../types";
import styles from "../../styles/TvDetailsPage.module.css";
import Head from "next/head";

const TvDetailsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
  );

  const data = await res.json();

  const paths = data.results.map((item: Result) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
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
