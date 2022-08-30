export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface GetCategory {
  categories: Category[];
}

export interface CategoryDesc {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface GetCategoryDesc {
  meals: CategoryDesc[];
}
