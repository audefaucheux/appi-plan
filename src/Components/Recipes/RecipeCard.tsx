import React, { useState } from "react";
import Recipe from "../../Types/Recipe";
import RecipePreview from "./RecipePreview";
import placeholderImage from "../../images/placeholder-image.png";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  return (
    <div className="recipe-card" onClick={() => setOpenPreview(true)}>
      <img src={placeholderImage} alt="placeholderImage" />
      <div>{recipe.title}</div>
      {openPreview && <RecipePreview {...{ recipe, setOpenPreview }} />}
    </div>
  );
};

export default RecipeCard;
