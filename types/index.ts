import { MouseEventHandler } from "react";

export interface ButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
}

export interface IngreProps {
  ingre: string;
  setIngre: (ingre: string) => void;
  optional?: string;
}

export interface FilterProps {
  title?: string;
}

export interface RandrinksProps {
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strMeasure1: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strInstructions: string;
}

export interface DrinkDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  drink: RandrinksProps;
}
