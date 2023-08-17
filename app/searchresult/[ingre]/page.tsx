import { fetchDrinkByIngre } from "@/utils";
import { DrinkCard, ShowMore } from "@/components";

interface Result {
  params: {
    ingre: string;
  };
}

const Result = async ({ params }: Result) => {
  const { ingre } = params;
  // console.log("INGREDIENTS?", ingre);
  const drinksByIngre = await fetchDrinkByIngre(ingre);
  // console.log("SELECTED INGREDIENT:", ingre);
  // console.log(drinksByIngre, "FETCHED DRINKS");

  const isDataEmpty =
    !Array.isArray(drinksByIngre) || drinksByIngre.length < 1 || !drinksByIngre;

  return (
    <main className="overflow-hidden padding-y">
      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Your search result for: "{`${ingre}`}"{" "}
          </h1>
        </div>

        {!isDataEmpty ? (
          <section>
            <div>
              {drinksByIngre?.map((drinks) => {
                return (
                  <div>
                    <DrinkCard key={drinks.id} randrink={drinks} />
                    <p>{drinks.strIngredient1}</p>
                  </div>
                );
              })}
            </div>
            <ShowMore pageNumber={1} isNext={10 > drinksByIngre.length} />
          </section>
        ) : (
          <div>
            <h4 className="text-black text-xl font-bold">
              Sorry, we did not find any drinks that match what you are looking
              for
            </h4>
          </div>
        )}
      </div>
    </main>
  );
};

export default Result;
