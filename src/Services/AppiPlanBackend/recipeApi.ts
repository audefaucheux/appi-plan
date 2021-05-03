import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import Recipe from "../../Types/Recipe";

const server = "http://localhost:3004";

export const getRecipes = async (
  setter: Dispatch<SetStateAction<Recipe[]>>
): Promise<void> => {
  try {
    const recipes = await axios.get(`${server}/recipes`);
    setter(recipes.data);
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = async (
  recipe: Partial<Recipe>,
  setter: Dispatch<SetStateAction<Recipe | undefined>>
): Promise<void> => {
  try {
    const newRecipe = await axios.post(`${server}/recipes`, recipe);
    setter(newRecipe.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = async (
  recipe: Recipe,
  setter: Dispatch<SetStateAction<Recipe | undefined>>
): Promise<void> => {
  try {
    const updatedRecipe = await axios.patch(
      `${server}/recipes/${recipe.id}`,
      recipe
    );
    setter(updatedRecipe.data);
  } catch (error) {
    console.log(error);
  }
};
