"use client";

import { useState } from "react";
import Image from "next/image";
import { RandrinksProps } from "@/types";
import Button from "./Button";
import { DrinkDetails } from "@/components";

interface RandomDrinkProps {
  randrink: RandrinksProps;
}

const DrinkCard = ({ randrink }: RandomDrinkProps) => {
  const [open, setOpen] = useState(false);

  const { strDrink, strDrinkThumb, strCategory, strIngredient1 } = randrink;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{strDrink}</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px]">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          Base drink:
        </span>
        {strIngredient1}
      </p>

      <div className="relative w-full h-40 my-3 object-contain ">
        <Image
          src={strDrinkThumb}
          alt={`picture of ${strDrink}`}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/cock-logo-2.svg"
              alt="category"
              width={30}
              height={12}
            />
            <p className="text-[14px]">{strCategory}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-semibold"
            handleClick={() => setOpen(true)}
          />
        </div>
      </div>
      <DrinkDetails
        isOpen={open}
        closeModal={() => setOpen(false)}
        drink={randrink}
      />
    </div>
  );
};

export default DrinkCard;
