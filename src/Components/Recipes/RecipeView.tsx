import React from "react";
import Recipe from "Types/Recipe";
import { convertMinutesToHours } from "Helpers/convertTime";
import placeholderImage from "images/placeholder-image.png";
import IngredientsList from "./Ingredients/IngredientsList";
import Directions from "./Directions";
import NutritionalInformation from "./NutritionalInformation";

interface RecipeViewProps {
  recipe: Recipe;
}
const RecipeView: React.FC<RecipeViewProps> = ({ recipe }) => {
  const {
    title,
    prepTime,
    cookingTime,
    servingSize,
    ingredients,
    directions,
    nutritionalInfo,
    notes,
    tags,
  } = recipe;
  return (
    <div>
      <p>{title}</p>
      <img src={placeholderImage} alt="placeholderImage" />
      <p>Preparation Time: {convertMinutesToHours(prepTime)}</p>
      <p>Cooking Time: {convertMinutesToHours(cookingTime)}</p>
      <p>Service Size: {servingSize}</p>
      <IngredientsList ingredients={ingredients} />
      <Directions directions={directions} />
      {nutritionalInfo && (
        <NutritionalInformation nutritionalInfo={nutritionalInfo} />
      )}
      <p>Notes: {notes}</p>
      <p>Tags: {tags}</p>
    </div>
  );
};

export default RecipeView;
