import React from "react";
import Recipe from "../../Constants/Recipe";
import placeholderImage from "../../images/placeholder-image.png";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={placeholderImage} alt="placeholderImage" />
      <div>{recipe.name}</div>
    </div>
  );
};

export default RecipeCard;
