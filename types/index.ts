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
