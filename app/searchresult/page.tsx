import { fetchDrinkByIngre } from "@/utils";
import { DrinkCard } from "@/components";
import { ResultProps } from "@/types";

interface Result {
  params: {
    ingre: string;
  };
}

const Result = async ({ params }: Result) => {
  const { ingre } = params;
  console.log("INGREDIENTS?", ingre);
  const oneDrinkFetched = await fetchDrinkByIngre(ingre);
  //   console.log("SELECTED INGREDIENT:", searchParams.ingre);

  const isDataEmpty =
    !Array.isArray(oneDrinkFetched) ||
    oneDrinkFetched.length < 1 ||
    !oneDrinkFetched;

  return (
    <main>
      <h3>Your search result .... </h3>
      <div>
        {!isDataEmpty ? (
          <section>
            <div>
              {oneDrinkFetched?.map((drink) => (
                <DrinkCard randrink={drink} />
              ))}
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
};

export default Result;
