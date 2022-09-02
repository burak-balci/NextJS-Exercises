import type { NextPage } from "next";
import Head from "next/head";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>Home</div>
    </div>
  );
};

export default Home;
