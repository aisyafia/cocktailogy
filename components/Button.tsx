"use client";

import Image from "next/image";
import { ButtonProps } from "@/types";

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={props.btnType || "button"}
        className={`custom-btn ${props.containerStyles}`}
        onClick={props.handleClick}
      >
        <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>
      </button>
    </div>
  );
};

export default Button;
