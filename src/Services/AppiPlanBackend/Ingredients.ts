import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const endpoint = "http://localhost:3004/ingredients";

export const getIngredients = async (
  setter: Dispatch<SetStateAction<string[]>>
): Promise<void> => {
  try {
    const response = await axios.get(endpoint);
    return setter(response.data);
  } catch (error) {
    throw error;
  }
};
