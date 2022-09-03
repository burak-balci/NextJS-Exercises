import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps } from "next";
import styles from "../../styles/TvDetailsPage.module.css";
import { MovieDetails } from "../../types";

const MovieDetailPage = ({ data }: { data: MovieDetails }) => {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${data.backdrop_path})`,
        }}
      ></div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.desc}>{data.overview}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default MovieDetailPage;
