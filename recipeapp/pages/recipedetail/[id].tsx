import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Meal, GetMeal } from "../../types";
import styles from "../../styles/Recipe.module.css";
import Head from "next/head";

const DetailPage = ({ meals }: { meals: Meal[] }) => {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>BBFoods | {meals[0].strMeal}</title>
        <meta name="description" content={`${meals[0].strMeal}`} />
      </Head>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>{meals[0].strMeal}</h1>
        <img className={styles.image} src={meals[0].strMealThumb} alt="" />
        <div className={styles.desc}>{meals[0].strInstructions}</div>
        <a className={styles.link} href={meals[0].strYoutube}>
          Watch on Youtube
        </a>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.query.id}`
  );
  const { meals }: GetMeal = await res.json();

  return {
    props: {
      meals,
    },
  };
};

export default DetailPage;
