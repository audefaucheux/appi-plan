import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../../Constants/Recipe";
import RecipeCard from "./RecipeCard";

const MyRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    try {
      const recipes = await axios.get("http://localhost:3004/recipes");
      setRecipes(recipes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <h1>My Recipes</h1>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default MyRecipes;
