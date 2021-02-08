import React from "react";
import Recipe from "../../Constants/Recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return <div className="recipe-card">{recipe.name}</div>;
};

export default RecipeCard;
