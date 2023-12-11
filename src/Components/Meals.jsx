import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("https://w5pwmx-3000.csb.app/meals");
      //w5pwmx-3000.csb.app/meals
      https: if (!response.ok) {
        //return response.json();
      }
      setMeals(await response.json());
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
