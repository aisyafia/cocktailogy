"use client";

import { useState } from "react";

import { SearchIngredients } from "./SearchIngredients";

const SearchBar = () => {
  const [ingre, setIngre] = useState<string>("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <h3>Search by ... </h3>
      <div className="searchbar__item">
        <SearchIngredients ingre={ingre} setIngre={setIngre} />
      </div>
    </form>
  );
};

export { SearchBar };
