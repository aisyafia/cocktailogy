import Image from "next/image";
import { CustomFilter, DrinkCard, Hero, SearchBar } from "@/components";
import { fetchRandomDrinks } from "@/utils";

export default async function Home() {
  const drinksFetched = await fetchRandomDrinks();
  // console.log("RANDOM drinks?", fetchRandomDrinks);

  const isDataEmpty =
    !Array.isArray(drinksFetched) || drinksFetched.length < 1 || !drinksFetched;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Drinks Menu</h1>
          <p>Pick your poison</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div>
              {drinksFetched?.map((drink) => {
                return (
                  <div>
                    <DrinkCard key={drink.id} randrink={drink} />
                  </div>
                );
              })}
            </div>
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
}
