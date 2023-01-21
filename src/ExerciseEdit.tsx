import React from "react";
import { IExercise } from "./Calories";

interface IExerciseList {
  exercise: IExercise;
  handleExerciseChange(id: string, calorie: IExercise): void;
  handleExerciseDelete(id: string): void;
}

export default function ExerciseEdit(props: IExerciseList) {
  function handleChange<T extends object>(changes: T) {
    props.handleExerciseChange(props.exercise.id, { ...props.exercise, ...changes });
  }

  return (
    <>
      <input
        className="calorie-edit__exercises "
        type="text"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange({ name: e.target.value })
        }
        value={props.exercise.name}
        placeholder="Add your exercise"
      />
      <input
        className="calorie-edit__exercises calorie-edit__input-ckal"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange({ caloriesBurned: parseInt(e.target.value) || "" })
        }
        value={props.exercise.caloriesBurned || ""}
        placeholder="Ckal"
        maxLength={4}
      />
      <button
        className="btn btn--danger"
        onClick={() => props.handleExerciseDelete(props.exercise.id)}
      >
        &times;
      </button>
    </>
  );
}
