export async function fetchDrinks() {
  const headers = {
    "X-RapidAPI-Host": "cocktail-by-api-ninjas.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.myKey,
  };

  const response = await fetch(
    // `https://the-cocktail-db.p.rapidapi.com/randomselection.php`,
    `https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?ingredients=vodka`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export async function fetchRandomDrinks() {
  const headers = {
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.myKey,
  };

  const response = await fetch(
    `https://the-cocktail-db.p.rapidapi.com/randomselection.php`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  // console.log(result.drinks, "RESULT???");
  return result.drinks;
}
