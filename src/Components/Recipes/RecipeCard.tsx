import React, { Dispatch, SetStateAction } from "react";
import Recipe from "../../Types/Recipe";
import Tag from "./Tag";
import placeholderImage from "images/placeholder-image.jpg";
import "./styles/RecipeCard.css";

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
          {tags && tags.map((tag, index) => <Tag key={index} tag={tag} />)}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
