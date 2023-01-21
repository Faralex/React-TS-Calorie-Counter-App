import React, { useContext } from "react";
import ExerciseEdit from "./ExerciseEdit";
import { CalorieContext } from "./App";
import { v4 as uuidv4 } from "uuid";
import { IProps, IExercise } from "./Calories";

interface ICalorieEdit {
  calorie: IProps;
}

export default function CalorieEdit(props: ICalorieEdit) {
  const { handleCalorieChange, handleCalorieSelect } = useContext(CalorieContext);

  function handleChange<T extends object>(changes: T) {
    handleCalorieChange(props.calorie.id, { ...props.calorie, ...changes });
  }

  function handleExerciseChange(id: string, exercises: IExercise) {
    const newExercises = [...props.calorie.exercises];
    const index = newExercises.findIndex((i) => i.id === id);
    newExercises[index] = exercises;
    handleChange({ exercises: newExercises });
  }

  function handleExerciseAdd() {
    const newExercise = {
      id: uuidv4(),
      name: "",
      caloriesBurned: 0,
    };
    handleChange({ exercises: [...props.calorie.exercises, newExercise] });
  }

  function handleExerciseDelete(id: string) {
    handleChange({ exercises: props.calorie.exercises.filter((i: IExercise) => i.id !== id) });
  }

  return (
    <div className="calorie-edit">
      <div className="calorie__edit-remove-button-container">
        <button
          className="btn calorie-edit__remove-button"
          onClick={() => handleCalorieSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="calorie-edit__details">
        <label htmlFor="date">Date</label>
        <input
          className="calorie-edit__input calorie-edit__input-date"
          type="text"
          name="date"
          id="date"
          value={props.calorie.date}
          placeholder="Date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ date: e.target.value })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="breakfast">
          Breakfast
        </label>
        <input
          className="calorie-edit__input "
          type="text"
          name="breakfast"
          id="breakfast"
          value={props.calorie.breakfast}
          placeholder="Add your breakfast"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ breakfast: e.target.value })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="breakfastckal">
          BreakfastCkal
        </label>
        <input
          className="calorie-edit__input calorie-edit__input-ckal"
          name="breakfastckal"
          id="breakfastckal"
          value={props.calorie.breakfastckal}
          maxLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ breakfastckal: parseInt(e.target.value) || "" })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="lunch">
          Lunch
        </label>
        <input
          className="calorie-edit__input"
          type="text"
          name="lunch"
          id="lunch"
          value={props.calorie.lunch}
          placeholder="Add your lunch"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ lunch: e.target.value })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="lunchCkal">
          LunchCkal
        </label>
        <input
          className="calorie-edit__input calorie-edit__input-ckal"
          name="lunchCkal"
          id="lunchCkal"
          value={props.calorie.lunchCkal}
          maxLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ lunchCkal: parseInt(e.target.value) || "" })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="dinner">
          Dinner
        </label>
        <input
          className="calorie-edit__input"
          type="text"
          name="dinner"
          id="dinner"
          value={props.calorie.dinner}
          placeholder="Add your dinner"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ dinner: e.target.value })
          }
        ></input>
        <label className="calorie-edit__label" htmlFor="dinner">
          DinnerCkal
        </label>
        <input
          className="calorie-edit__input calorie-edit__input-ckal"
          name="dinnerCkal"
          id="dinnerCkal"
          value={props.calorie.dinnerCkal}
          maxLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ dinnerCkal: parseInt(e.target.value) || "" })
          }
        ></input>
      </div>
      <br />
      <div className="calories-edit__ingredient-grid">
        <div>Exercises</div>
        <div>Calories Burned</div>
        <div></div>
        {props.calorie.exercises.map((exercise: any) => (
          <ExerciseEdit
            key={exercise.id}
            handleExerciseChange={handleExerciseChange}
            handleExerciseDelete={handleExerciseDelete}
            exercise={exercise}
          />
        ))}
      </div>
      <div className="calories-edit__add-ingredient">
        <button className="btn btn--primary" onClick={() => handleExerciseAdd()}>
          Add exercise
        </button>
      </div>
    </div>
  );
}
