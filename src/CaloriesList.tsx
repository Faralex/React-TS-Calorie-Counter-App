import React, { useContext } from "react";
import Calories from "./Calories";
import { CalorieContext } from "./App";
import { IProps } from "./Calories";

interface ICalorieEdit {
  calories: IProps[];
}

export default function CaloriesList(props: ICalorieEdit) {
  const { handleCaloriesAdd } = useContext(CalorieContext);
  return (
    <div className="calories-list">
      <div>
        {props.calories.map((calorie: IProps) => {
          return <Calories key={calorie.id} {...calorie} />;
        })}
      </div>
      <div className="calories-list__add-day-btn-container">
        <button onClick={handleCaloriesAdd} className="btn btn--primary">
          Add day
        </button>
      </div>
    </div>
  );
}
