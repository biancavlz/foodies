import MealItem from "./MealItem";
import styles from "./MealsGrid.module.css";
import { Meal } from "@/types/meal";

type MealsGridProps = {
  meals: Meal[];
};

function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
