"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchIngredients } from "./SearchIngredients";
import Link from "next/link";

interface otherProps {
  otherClasses?: string;
}

export const SearchButton = (props: otherProps) => (
  <button type="submit" className={`-ml-3 z-10 ${props.otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [ingre, setIngre] = useState<string>("");
  const [ingre2, setIngre2] = useState<string>("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SELECTED INGRE:", ingre);
    // if (ingre.trim() === "" && ingre2.trim() === "") {
    //   return alert("Please provide some input");
    // }

    updateParams(ingre.toLowerCase());
    setIngre("");
    setIngre2("");
  };

  const updateParams = (ingre: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (ingre) {
      searchParams.set("ingredient", ingre);
    } else {
      searchParams.delete("ingredient");
    }

    if (ingre2) {
      searchParams.set("2nd ingredient", ingre2);
    } else {
      searchParams.delete("2nd ingredient");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
    //line above might not need changing. if so, just remove the scroll false
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <h3>Search by ingredients</h3>
      <div className="searchbar__item">
        <SearchIngredients ingre={ingre} setIngre={setIngre} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <SearchIngredients
          ingre={ingre2}
          setIngre={setIngre2}
          optional="second ingredient (optional)"
        />
      </div>

      <SearchButton />
    </form>
  );
};

export { SearchBar };
