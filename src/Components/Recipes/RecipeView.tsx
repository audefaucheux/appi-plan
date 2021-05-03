import React, { FC } from "react";
import Recipe from "../../Types/Recipe";
import { convertMinutesToHours } from "../../Helpers/convertTime";
import placeholderImage from "images/placeholder-image.jpg";
import IngredientsList from "./Ingredients/IngredientsList";
import DirectionsList from "./Directions/DirectionsList";
import NutritionalInformation from "./NutritionalInformation";
import DisplayTag from "./Tags/DisplayTag";
import "./styles/RecipeView.css";

interface RecipeViewProps {
  recipe: Recipe;
}
const RecipeView: FC<RecipeViewProps> = ({ recipe }) => {
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
    <div id="recipe-view">
      <div className="recipe-header">
        <img src={placeholderImage} alt="placeholderImage" />
        <div>
          <h2>{title}</h2>
          <p>Preparation Time: {convertMinutesToHours(prepTime)}</p>
          <p>Cooking Time: {convertMinutesToHours(cookingTime)}</p>
          <p>Service Size: {servingSize}</p>
          {nutritionalInfo && <NutritionalInformation nutritionalInfo={nutritionalInfo} />}
        </div>
      </div>
      {ingredients && <IngredientsList ingredients={ingredients} />}
      {directions && <DirectionsList directions={directions} />}
      <h3>Notes</h3>
      <p>{notes}</p>
      <h3>Tags</h3>
      <div className="tag-list">
        {tags.map((tag, index) => (
          <DisplayTag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default RecipeView;
