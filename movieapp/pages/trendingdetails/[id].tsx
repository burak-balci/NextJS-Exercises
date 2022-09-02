import { useRouter } from "next/router";
import React from "react";
import type { InferGetStaticPropsType } from "next";
import { Trending, Result } from "../../types";
import styles from "../../styles/TvDetailsPage.module.css";

const TvDetailsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const route = useRouter();
  const filtered = data.results.filter(
    (item: Result) => Number(item.id) === Number(route.query.id)
  );
  console.log(filtered[0]);

  return (
    <div className={styles.container}>
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
