export async function fetchRandomDrinks() {
  const headers = {
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_KEY,
  };
  try {
    const response = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/randomselection.php`,
      {
        headers: headers,
      }
    );
    const result = await response.json();
    // console.log(result.drinks, "RESULT???");
    return result.drinks;
  } catch (error) {
    console.log("ERROR MESSAGE", error);
  }
}

export async function fetchDrinkByIngre(ingre: string) {
  const headers = {
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_KEY,
  };
  try {
    const response = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingre}`,
      {
        headers: headers,
      }
    );
    const result = await response.json();
    return result.drinks;
  } catch (error) {
    console.log("AN ERROR OCCURED", error);
  }
}
