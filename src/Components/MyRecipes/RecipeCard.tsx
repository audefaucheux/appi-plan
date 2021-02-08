import React from "react";
import Recipe from "../../Constants/Recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return <div className="recipe-card">{recipe.name}</div>;
};

export default RecipeCard;
