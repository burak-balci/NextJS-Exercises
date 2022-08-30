import React from "react";
import { CategoryDesc } from "../types";
import Link from "next/link";
import styles from "../styles/MealCard.module.css";

interface IProps {
  meal: CategoryDesc;
}

const MealCard = ({ meal }: IProps) => {
  return (
    <Link href={`/recipedetail/${meal.idMeal}`}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <h3 className={styles.title}>{meal.strMeal}</h3>
      </div>
    </Link>
  );
};

export default MealCard;
