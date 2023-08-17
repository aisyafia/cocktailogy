"use client";

import { ShowMoreProps } from "@/types";
import Button from "./Button";

const ShowMore = (props: ShowMoreProps) => {
  const handleNavigation = () => {};
  return (
    <div>
      {!props.isNext && (
        <Button
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export { ShowMore };
