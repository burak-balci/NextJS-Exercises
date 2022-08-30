import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Category, GetCategory } from "../types";
import CategoryCard from "../components/CategoryCard";

const Home: NextPage<{ categories: Category[] }> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BBFoods | Categories</title>
        <meta name="description" content="All about food" />
      </Head>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.card}>
        {categories.map((category) => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const { categories }: GetCategory = await res.json();

  return {
    props: {
      categories,
    },
  };
};

export default Home;
