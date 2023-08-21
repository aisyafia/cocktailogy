"use client";

import { useState } from "react";
import { RandrinksProps } from "@/types";
import Image from "next/image";
import { Button, DrinkDetails } from "@/components";
import { fetchDrinkDetailsById } from "@/utils";

interface RandomDrinkProps {
  drink: RandrinksProps;
}

const SearchedDrinkCard = ({ drink }: RandomDrinkProps) => {
  const [open, setOpen] = useState(false);
  const [oneDrink, setOneDrink] = useState(null);

  const { strDrink, strDrinkThumb, idDrink } = drink;

  const getADrink = async () => {
    const result = await fetchDrinkDetailsById(idDrink);
    setOneDrink(result[0]);
    // console.log("DO WE GET A DRINK?", oneDrink);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getADrink();
    setOpen(true);
  };

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{strDrink}</h2>
      </div>
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
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-semibold"
            handleClick={handleClick}
          />
        </div>
      </div>
      {oneDrink && (
        <DrinkDetails
          isOpen={open}
          closeModal={() => setOpen(false)}
          drink={oneDrink}
        />
      )}
    </div>
  );
};

export default SearchedDrinkCard;
