export async function fetchDrinks() {
  const headers = {
    // "X-RapidAPI-Key": "bc7cc44426msh89c4c15308cc9b4p14e1e3jsn6e522166c0d8",
    // "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    "X-RapidAPI-Key": "bc7cc44426msh89c4c15308cc9b4p14e1e3jsn6e522166c0d8",
    "X-RapidAPI-Host": "cocktail-by-api-ninjas.p.rapidapi.com",
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
