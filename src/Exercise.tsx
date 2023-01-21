import React from "react";
import { IExercise } from "./Calories";

export default function Exercise({ name, caloriesBurned }: IExercise) {
  return (
    <>
      <div className="exercise-info">
        <span className="exercise-name">{name}</span>
        <span className="exercise-calories">{caloriesBurned} Ckal burned</span>
      </div>
    </>
  );
}
