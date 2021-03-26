import React, { useState } from "react";
import Recipe from "Types/Recipe";
import Ingredient from "Types/Ingredient";
import Direction from "Types/Direction";
import IngredientsForm from "./Ingredients/IngredientsForm";
import DirectionsForm from "./DirectionsForm";

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
  const [title, setTitle] = useState<string>(recipe.title);
  const [prepTime, setPrepTime] = useState<number | undefined>(recipe.prepTime);
  const [cookingTime, setCookingTime] = useState<number | undefined>(
    recipe.cookingTime
  );
  const [servingSize, setServingSize] = useState<number>(recipe.servingSize);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    recipe.ingredients
  );
  const [directions, setDirections] = useState<Direction[]>(recipe.directions);
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
      <label htmlFor="title">Recipe Name: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <div>IMAGE HERE</div>
      <br />
      <label htmlFor="prep-time">Preparation Time: </label>
      <input
        type="number"
        id="prep-time"
        value={prepTime}
        onChange={(e) => setPrepTime(parseInt(e.target.value))}
        required
      />
      <br />
      <label htmlFor="cooking-time">Cooking Time: </label>
      <input
        type="number"
        id="cooking-time"
        value={cookingTime}
        onChange={(e) => setCookingTime(parseInt(e.target.value))}
        required
      />
      <br />
      <label htmlFor="serving-size">Serving Size: </label>
      <input
        type="number"
        id="serving-size"
        value={servingSize}
        onChange={(e) => setServingSize(parseInt(e.target.value))}
        required
      />
      <br />
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
      <input type="submit" value="Save" onClick={handleSaveClick} />
    </form>
  );
};

export default RecipeForm;
