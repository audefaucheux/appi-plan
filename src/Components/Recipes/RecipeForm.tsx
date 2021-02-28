import React, { useState } from "react";
import Recipe from "../../Types/Recipe";
import Ingredient from "../../Types/Ingredient";
import IngredientsForm from "./IngredientsForm";

interface RecipeFormProps {
  recipe: Recipe;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ recipe }) => {
  const [title, setTitle] = useState<string>(recipe.title);
  const [prepTime, setPrepTime] = useState<number | undefined>(recipe.prepTime);
  const [cookingTime, setCookingTime] = useState<number | undefined>(
    recipe.cookingTime
  );
  const [servingSize, setServingSize] = useState<number>(recipe.servingSize);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    recipe.ingredients
  );

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
      <label htmlFor="ingredients">Ingredients: </label>
      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <br />
    </form>
  );
};

export default RecipeForm;
