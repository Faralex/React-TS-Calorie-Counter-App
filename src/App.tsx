import React, { useState, createContext, useEffect } from "react";
import "./css/app.css";
import CaloriesList from "./CaloriesList";
import { v4 as uuidv4 } from "uuid";
import CalorieEdit from "./CalorieEdit";
import { IProps } from "./Calories";

type FunctionsType = {
  handleCaloriesAdd(): void;
  handleCalorieDelete(id: string): void;
  handleCalorieSelect(id: string | undefined): void;
  handleCalorieChange(id: string, calorie: IProps): void;
};

export const CalorieContext = createContext<FunctionsType>({} as FunctionsType);

const LOCAL_STORAGE_KEY = "calorieTracker.calories";

function App() {
  const [selectedCalorieId, setSelectedCalorieId] = useState<string>();
  const [calories, setCalories] = useState(sampleCalories);
  const selectedCalorie = calories.find((calorie) => calorie.id === selectedCalorieId);

  useEffect(() => {
    const caloriesJSON = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (caloriesJSON !== null) {
      setCalories(JSON.parse(caloriesJSON));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(calories));
  }, [calories]);

  const calorieContextValue = {
    handleCaloriesAdd,
    handleCalorieDelete,
    handleCalorieSelect,
    handleCalorieChange,
  };

  function handleCalorieSelect(id: string) {
    setSelectedCalorieId(id);
  }

  function handleCaloriesAdd() {
    const newCalories = {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      breakfast: "",
      lunch: "",
      dinner: "",
      breakfastckal: 0,
      lunchCkal: 0,
      dinnerCkal: 0,
      exercises: [
        {
          id: uuidv4(),
          name: "",
          caloriesBurned: 0,
        },
      ],
    };
    setSelectedCalorieId(newCalories.id);
    setCalories([...calories, newCalories]);
  }

  function handleCalorieChange(id: string, calorie: IProps) {
    const newCalories = [...calories];
    const index = newCalories.findIndex((r) => r.id === id);
    newCalories[index] = calorie;
    setCalories(newCalories);
  }

  function handleCalorieDelete(id: string) {
    if (selectedCalorieId != null && selectedCalorieId === id) {
      setSelectedCalorieId(undefined);
    }
    setCalories(calories.filter((calorie) => calorie.id !== id));
  }

  return (
    <CalorieContext.Provider value={calorieContextValue}>
      <CaloriesList calories={calories} />
      {selectedCalorie && <CalorieEdit calorie={selectedCalorie} />}
    </CalorieContext.Provider>
  );
}

const sampleCalories = [
  {
    id: uuidv4(),
    date: new Date().toLocaleDateString(),
    breakfast: "Bread with butter",
    lunch: "Cheese Soup, snacks after",
    dinner: "Fried chicken and potatoes",
    breakfastckal: 314,
    lunchCkal: 430,
    dinnerCkal: 710,
    exercises: [
      {
        id: "1",
        name: "10000 steps",
        caloriesBurned: 350,
      },
      {
        id: "2",
        name: "200 push ups",
        caloriesBurned: 150,
      },
    ],
  },
];

export default App;
