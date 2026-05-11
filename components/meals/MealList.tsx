import { getMeals } from "@/lib/meals";
import MealsGrid from "./MealsGrid";

async function MealList() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default MealList;
