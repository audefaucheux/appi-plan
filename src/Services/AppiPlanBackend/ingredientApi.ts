import axios from "axios";
import React from "react";

export const getIngredients = async (
  setter: React.Dispatch<React.SetStateAction<string[]>>
): Promise<void> => {
  try {
    const ingredients = await axios.get("http://localhost:3004/ingredients");
    setter(ingredients.data);
  } catch (error) {
    console.log(error);
  }
};
