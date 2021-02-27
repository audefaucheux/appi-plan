import React from "react";
import Recipe from "../../Types/Recipe";
import { convertMinutesToHours } from "../../Helpers/convertTime";
import placeholderImage from "../../images/placeholder-image.png";
import IngredientsList from "./IngredientsList";
import Directions from "./Directions";
import NutritionalInformation from "./NutritionalInformation";

interface RecipeViewProps {
  recipe: Recipe;
}
const RecipeView: React.FC<RecipeViewProps> = ({ recipe }) => {
  const {
    title,
    preparationTime,
    cookingTime,
    ingredients,
    directions,
    nutritionalInfo,
  } = recipe;
  return (
    <div>
      <p>{title}</p>
      <img src={placeholderImage} alt="placeholderImage" />
      <p>Preparation Time: {convertMinutesToHours(preparationTime)}</p>
      <p>Cooking Time: {convertMinutesToHours(cookingTime)}</p>
      <IngredientsList ingredients={ingredients} />
      <Directions directions={directions} />
      {nutritionalInfo && (
        <NutritionalInformation nutritionalInfo={nutritionalInfo} />
      )}
    </div>
  );
};

export default RecipeView;
