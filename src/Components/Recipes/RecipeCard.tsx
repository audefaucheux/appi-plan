import React, { Dispatch, SetStateAction } from "react";
import Recipe from "../../Types/Recipe";
import placeholderImage from "../../images/placeholder-image.png";

interface RecipeCardProps {
  recipe: Recipe;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | undefined>>;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  setOpenModal,
  setSelectedRecipe,
}) => {
  return (
    <div
      className="recipe-card"
      onClick={() => {
        setOpenModal(true);
        setSelectedRecipe(recipe);
      }}
    >
      <img src={placeholderImage} alt="placeholderImage" />
      <div>{recipe.title}</div>
    </div>
  );
};

export default RecipeCard;
