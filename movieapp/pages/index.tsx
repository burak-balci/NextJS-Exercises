import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";
import Card from "../components/Card";
import { PopularMovies } from "../types";

const Home = ({
  results,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>BBMovies | Home</title>
        <meta name="description" content="Movies and TV" />
      </Head>
      <div>
        <Slider data={data} />
      </div>
      <div className={styles.innerContainer}>
        {results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const { results }: PopularMovies = await res.json();

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();

  return {
    props: {
      results,
      data,
    },
  };
};

export default Home;
