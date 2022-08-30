import React from "react";
import { Category } from "../types";
import styles from "../styles/CategoryCard.module.css";
import Link from "next/link";

interface IProps {
  category: Category;
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <Link href={`/categories/${category.strCategory}`}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={category.strCategoryThumb}
          alt={category.strCategory}
        />
        <h1 className={styles.title}>{category.strCategory}</h1>
        <h3 className={styles.desc}>{category.strCategoryDescription}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
