import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../../Constants/Recipe";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    try {
      const recipes = await axios.get("http://localhost:3004/recipes");
      setRecipes(recipes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderRecipe = () => {
    return (
      <ul>
        {recipes.map((recipe: Recipe, index: number) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <h1>My Recipes</h1>
      {renderRecipe()}
    </div>
  );
};

export default MyRecipes;
