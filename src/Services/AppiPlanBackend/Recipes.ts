import axios from "axios";
import Recipe from "../../Types/Recipe";
import { Dispatch, SetStateAction } from "react";

const endpoint = "http://localhost:3004/recipes";

export const getRecipes = async (
  setter: Dispatch<SetStateAction<Recipe[]>>
): Promise<void> => {
  try {
    const response = await axios.get(endpoint);
    setter(response.data);
  } catch (error) {
    throw error;
  }
};
