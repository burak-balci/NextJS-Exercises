import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps } from "next";
import styles from "../../styles/TvDetailsPage.module.css";
import { TopRated, Result } from "../../types";

const TopRatedDetailPage = ({ data }: { data: TopRated }) => {
  const route = useRouter();
  const filtered = data.results.filter(
    (item: Result) => Number(item.id) === Number(route.query.id)
  );

  return (
    <div className={styles.container}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${
            filtered[0].backdrop_path || filtered[0].poster_path
          })`,
        }}
      ></div>
      <div className={styles.title}>{filtered[0].name}</div>
      <div className={styles.desc}>{filtered[0].overview}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default TopRatedDetailPage;
