import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className={styles.innerContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
