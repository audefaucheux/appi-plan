import React, { useState } from "react";
import Recipe from "../../Types/Recipe";
import Ingredient from "../../Types/Ingredient";
import Direction from "../../Types/Direction";
import IngredientsForm from "./Ingredients/IngredientsForm";
import DirectionsForm from "./Directions/DirectionsForm";
import Tag from "./Tag";
import placeholderImage from "images/placeholder-image.jpg";
import "./styles/RecipeForm.css";

interface RecipeFormProps {
  recipe: Recipe;
  handleSaveRecipe: (recipe: Recipe) => void;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  recipe,
  handleSaveRecipe,
  setEditMode,
}) => {
  const [title, setTitle] = useState<string | undefined>(recipe.title);
  const [prepTime, setPrepTime] = useState<number | undefined>(recipe.prepTime);
  const [cookingTime, setCookingTime] = useState<number | undefined>(
    recipe.cookingTime
  );
  const [servingSize, setServingSize] = useState<number | undefined>(
    recipe.servingSize
  );
  const [ingredients, setIngredients] = useState<Ingredient[] | undefined>(
    recipe.ingredients
  );
  const [directions, setDirections] = useState<Direction[] | undefined>(
    recipe.directions
  );
  const [notes, setNotes] = useState<string | undefined>(recipe.notes);

  const handleSaveClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSaveRecipe({
      ...recipe,
      title,
      prepTime,
      cookingTime,
      servingSize,
      ingredients,
      directions,
      notes,
    });
    setEditMode(false);
  };

  return (
    <form>
      <div className="recipe-header">
        <img src={placeholderImage} alt="placeholder-image" />
        <div className="recipe-info">
          <label htmlFor="title">Recipe Name: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="prep-time">Preparation Time: </label>
          <input
            type="number"
            id="prep-time"
            value={prepTime}
            onChange={(e) => setPrepTime(parseInt(e.target.value))}
            required
          />
          <label htmlFor="cooking-time">Cooking Time: </label>
          <input
            type="number"
            id="cooking-time"
            value={cookingTime}
            onChange={(e) => setCookingTime(parseInt(e.target.value))}
            required
          />
          <label htmlFor="serving-size">Serving Size: </label>
          <input
            type="number"
            id="serving-size"
            value={servingSize}
            onChange={(e) => setServingSize(parseInt(e.target.value))}
            required
          />
        </div>
      </div>
      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <DirectionsForm directions={directions} setDirections={setDirections} />
      <h3>Notes: </h3>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
      />
      <h3>Tags</h3>
      <div className="tag-list">
        {recipe.tags &&
          recipe.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
      </div>
      <br />
      <input type="submit" value="Save" onClick={handleSaveClick} />
    </form>
  );
};

export default RecipeForm;
