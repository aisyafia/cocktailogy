"use client";

import { useState } from "react";
import Image from "next/image";
import { DrinksProps } from "@/types";
import Button from "./Button";

interface DrinkCardProps {
  drink: DrinksProps;
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
  // const {
  //   strDrink,
  //   strDrinkThumb,
  //   strIngredient1,
  //   strMeasure1,
  //   strInstructions,
  // } = drink;

  const { name, ingredients, instructions } = drink;

  // console.log("MISSING NAME", strDrink);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>
      <div>{/* <img src={strDrinkThumb} alt={strDrink} width="100%" /> */}</div>
    </div>
  );
};

export { DrinkCard };
