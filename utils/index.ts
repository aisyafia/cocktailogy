export async function fetchDrinks() {
  const headers = {
    "X-RapidAPI-Host": "cocktail-by-api-ninjas.p.rapidapi.com",
    // "X-RapidAPI-Key": "bc7cc44426msh89c4c15308cc9b4p14e1e3jsn6e522166c0d8",
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
    // "X-RapidAPI-Key": "bc7cc44426msh89c4c15308cc9b4p14e1e3jsn6e522166c0d8",
    "X-RapidAPI-Key": process.env.API_KEY,
  };
  console.log(process.env.API_KEY, "NEW KEY");
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
