import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { GetCategoryDesc, CategoryDesc } from "../../types";
import MealCard from "../../components/MealCard";
import styles from "../../styles/Home.module.css";

const CategoryPage = ({ meals }: { meals: CategoryDesc[] }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>BBFoods | {router.query.name} Recipe</title>
        <meta name="description" content={`${router.query.name} Recipe`} />
      </Head>
      <h1 className={styles.title}>{router.query.name} Recipe</h1>
      <div className={styles.card}>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.query.name}`
  );
  const { meals }: GetCategoryDesc = await res.json();

  return {
    props: {
      meals,
    },
  };
};

export default CategoryPage;
