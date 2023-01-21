import React, { useContext } from "react";
import ExerciseList from "./ExerciseList";
import { CalorieContext } from "./App";

export interface IExercise {
  id: string;
  name: string;
  caloriesBurned: any;
}

export interface IProps {
  id: string;
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  breakfastckal: number;
  lunchCkal: number;
  dinnerCkal: number;
  exercises: IExercise[];
}

export default function Calories(props: IProps) {
  const { handleCalorieDelete, handleCalorieSelect } = useContext(CalorieContext);
  return (
    <div className="calories">
      <div className="calories__header">
        <h3 className="calories__title">{props.date}</h3>
        <div>
          <button
            className="btn btn--primary mr-5"
            onClick={() => handleCalorieSelect(props.id)}
          >
            Edit
          </button>
          <button className="btn btn--danger" onClick={() => handleCalorieDelete(props.id)}>
            Delete
          </button>
        </div>
      </div>
      <div>
        <h3 className="food-title">Food</h3>
        <div className="food-time">6:00-12:00: </div>
        <div className="food-info">
          <span className="food-name">{props.breakfast} </span>
          <span className="food-calories">{props.breakfastckal} Calories</span>
        </div>
      </div>
      <div>
        <div className="food-time">12:00-17:00: </div>
        <div className="food-info">
          <span className="food-name">{props.lunch}</span>
          <span className="food-calories">{props.lunchCkal} Calories</span>
        </div>
      </div>
      <div>
        <div className="food-time">17:00-23:00: </div>
        <div className="food-info">
          <span className="food-name">{props.dinner} </span>
          <span className="food-calories">{props.dinnerCkal} Calories</span>
        </div>
      </div>
      <div className="food-total">
        Total calories: {props.breakfastckal + props.lunchCkal + props.dinnerCkal}
      </div>
      <div>
        <h3 className="exercise-title">Exercises</h3>
        <div>
          <ExerciseList exercises={props.exercises} />
        </div>
      </div>
    </div>
  );
}
