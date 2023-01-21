import React from "react";
import Exercise from "./Exercise";
import { IExercise } from "./Calories";

interface IExerciseList {
  exercises: IExercise[];
}

export default function ExerciseList({ exercises }: IExerciseList) {
  const totalBurned = exercises
    .map((exercise: IExercise) => {
      return exercise.caloriesBurned;
    })
    .reduce((prev, curr) => {
      return prev + curr;
    });

  const ingredientElements = exercises.map((exercise: IExercise) => {
    return <Exercise key={exercise.id} {...exercise} />;
  });
  return (
    <div>
      {ingredientElements}
      <div className="total-burned">Total ckal burned: {totalBurned}</div>
    </div>
  );
}
