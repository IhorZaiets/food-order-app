import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals.component";
import MealsSummary from "./MealsSummary.component";

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
