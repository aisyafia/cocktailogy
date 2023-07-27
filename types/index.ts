import { MouseEventHandler } from "react";

export interface ButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface IngreProps {
  ingre: string;
  setIngre: (ingre: string) => void;
}

export interface FilterProps {
  title?: string;
}

export interface DrinksProps {
  // idDrink: string;
  // strDrink: string;
  // strDrinkThumb: string;
  // strIngredient1: string;
  // strIngredient2?: string;
  // strIngredient3?: string;
  // strIngredient4?: string;
  // strIngredient5?: string;
  // strIngredient6?: string;
  // strIngredient7?: string;
  // strMeasure1: string;
  // strMeasure2?: string;
  // strMeasure3?: string;
  // strMeasure4?: string;
  // strMeasure5?: string;
  // strMeasure6?: string;
  // strMeasure7?: string;
  // strInstructions: string;
  name: string;
  ingredients: string[];
  instructions: string;
}
