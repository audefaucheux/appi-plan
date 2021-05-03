import React, { useState, Dispatch, SetStateAction, FC, MouseEvent } from "react";
import Recipe from "../../Types/Recipe";
import Ingredient from "../../Types/Ingredient";
import Direction from "../../Types/Direction";
import NutritionalInfo from "../../Types/NutritionalInfo";
import IngredientsForm from "./Ingredients/IngredientsForm";
import DirectionsForm from "./Directions/DirectionsForm";
import NutritionalInfoForm from "./NutritionalInfo/NutritionalInfoForm";
import TagsForm from "./Tags/TagsForm";
import placeholderImage from "images/placeholder-image.jpg";
import "./styles/RecipeForm.css";

interface RecipeFormProps {
  recipe?: Recipe;
  handleCreateRecipe: (recipe: Partial<Recipe>) => void;
  handleUpdateRecipe: (recipe: Recipe) => void;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const RecipeForm: FC<RecipeFormProps> = ({
  recipe,
  handleCreateRecipe,
  handleUpdateRecipe,
  setEditMode,
}) => {
  const defaultRecipe = {
    title: recipe?.title || "",
    prepTime: recipe?.prepTime || 0,
    cookingTime: recipe?.cookingTime || 0,
    servingSize: recipe?.servingSize || 0,
    ingredients: recipe?.ingredients || [],
    directions: recipe?.directions || [],
    tags: recipe?.tags || [],
  };

  const [title, setTitle] = useState<string>(defaultRecipe.title);
  const [prepTime, setPrepTime] = useState<number>(defaultRecipe.prepTime);
  const [cookingTime, setCookingTime] = useState<number>(defaultRecipe.cookingTime);
  const [servingSize, setServingSize] = useState<number>(defaultRecipe.servingSize);
  const [ingredients, setIngredients] = useState<Ingredient[]>(defaultRecipe.ingredients);
  const [directions, setDirections] = useState<Direction[]>(defaultRecipe.directions);
  const [tags, setTags] = useState<string[]>(defaultRecipe.tags);
  const [notes, setNotes] = useState<string | undefined>(recipe?.notes);
  const [nutritionalInfo, setNutritionalInfo] = useState<NutritionalInfo | undefined>(
    recipe?.nutritionalInfo
  );

  const handleSaveClick = (event: MouseEvent) => {
    event.preventDefault();
    const updatedRecipe = {
      title,
      prepTime,
      cookingTime,
      servingSize,
      ingredients,
      directions,
      tags,
      notes,
      nutritionalInfo,
    };

    if (!recipe) {
      handleCreateRecipe(updatedRecipe);
    } else {
      handleUpdateRecipe({
        ...updatedRecipe,
        id: recipe.id,
      });
    }
    setEditMode(false);
  };

  return (
    <form>
      <div className="recipe-header">
        <img src={placeholderImage} alt="placeholder-image" />
        <div className="recipe-info">
          <label htmlFor="title">
            Recipe Name:
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label htmlFor="prep-time">
            Preparation Time:
            <input
              type="number"
              id="prep-time"
              value={prepTime}
              onChange={(e) => setPrepTime(parseInt(e.target.value))}
              required
            />
          </label>
          <label htmlFor="cooking-time">
            Cooking Time:
            <input
              type="number"
              id="cooking-time"
              value={cookingTime}
              onChange={(e) => setCookingTime(parseInt(e.target.value))}
              required
            />
          </label>
          <label htmlFor="serving-size">
            Serving Size:
            <input
              type="number"
              id="serving-size"
              value={servingSize}
              onChange={(e) => setServingSize(parseInt(e.target.value))}
              required
            />
          </label>
          <NutritionalInfoForm
            nutritionalInfo={nutritionalInfo}
            setNutritionalInfo={setNutritionalInfo}
          />
        </div>
      </div>
      <IngredientsForm ingredients={ingredients} setIngredients={setIngredients} />
      <DirectionsForm directions={directions} setDirections={setDirections} />
      <h3>Notes: </h3>
      <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} required />
      <TagsForm tags={tags} setTags={setTags} />
      <br />
      <button type="button" onClick={handleSaveClick}>
        Save
      </button>
    </form>
  );
};

export default RecipeForm;
