import React, { Dispatch, SetStateAction, FC } from "react";
import Recipe from "../../Types/Recipe";
import DisplayTag from "./Tags/DisplayTag";
import placeholderImage from "images/placeholder-image.jpg";
import "./styles/RecipeCard.css";

interface RecipeCardProps {
  recipe: Recipe;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | undefined>>;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe, setOpenModal, setSelectedRecipe }) => {
  const { title, tags } = recipe;

  return (
    <div
      id="recipe-card"
      onClick={() => {
        setOpenModal(true);
        setSelectedRecipe(recipe);
      }}
    >
      <div id="recipe-card-image">
        <img src={placeholderImage} alt="placeholderImage" />
      </div>
      <div id="recipe-card-description">
        {title}
        <div className="tag-list">
          {tags && tags.map((tag, index) => <DisplayTag key={index} tag={tag} />)}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
