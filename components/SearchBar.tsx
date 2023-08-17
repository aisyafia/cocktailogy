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
    setIngre("");
    setIngre2("");
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
      <Link href={`/searchresult/${ingre.toLowerCase()}`}>
        <SearchButton />
      </Link>
    </form>
  );
};

export { SearchBar };
