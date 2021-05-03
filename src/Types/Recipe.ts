import Ingredient from "./Ingredient";
import Direction from "./Direction";
import NutritionalInfo from "./NutritionalInfo";

interface Recipe {
  id: string;
  title: string;
  prepTime?: number;
  cookingTime?: number;
  servingSize?: number;
  ingredients?: Ingredient[];
  directions?: Direction[];
  nutritionalInfo?: NutritionalInfo;
  notes?: string;
  tags?: string[];
}

export default Recipe;
