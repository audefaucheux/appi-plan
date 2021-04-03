import React from "react";
import Recipe from "Types/Recipe";
import { convertMinutesToHours } from "Helpers/convertTime";
import placeholderImage from "images/placeholder-image.jpg";
import IngredientsList from "./Ingredients/IngredientsList";
import DirectionsList from "./Directions/DirectionsList";
import NutritionalInformation from "./NutritionalInformation";
import Tag from "./Tag";
import "./styles/RecipeView.css";

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
    <div id="recipe-view">
      <div id="recipe-header">
        <img src={placeholderImage} alt="placeholderImage" />
        <div>
          <h2>{title}</h2>
          <p>Preparation Time: {convertMinutesToHours(prepTime)}</p>
          <p>Cooking Time: {convertMinutesToHours(cookingTime)}</p>
          <p>Service Size: {servingSize}</p>
          {nutritionalInfo && (
            <NutritionalInformation nutritionalInfo={nutritionalInfo} />
          )}
        </div>
      </div>
      <IngredientsList ingredients={ingredients} />
      <DirectionsList directions={directions} />
      <p>Notes: {notes}</p>
      <div className="tag-list">
        Tags: {tags && tags.map((tag, index) => <Tag key={index} tag={tag} />)}
      </div>
    </div>
  );
};

export default RecipeView;
