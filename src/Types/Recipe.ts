import Ingredient from "./Ingredient";
import Direction from "./Direction";
import NutritionalInfo from "./NutritionalInfo";

interface Recipe {
  id: string;
  title: string;
  prepTime: number | undefined;
  cookingTime: number | undefined;
  servingSize: number;
  ingredients: Ingredient[];
  directions: Direction[];
  nutritionalInfo: NutritionalInfo;
  notes: string | undefined;
  tags: string[];
}

export default Recipe;
