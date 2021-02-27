import axios from "axios";
import React from "react";
import Recipe from "../../Types/Recipe";

export const getRecipes = async (
  setter: React.Dispatch<React.SetStateAction<Recipe[]>>
): Promise<void> => {
  try {
    const recipes = await axios.get("http://localhost:3004/recipes");
    setter(recipes.data);
  } catch (error) {
    console.log(error);
  }
};
