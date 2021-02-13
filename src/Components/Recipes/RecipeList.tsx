import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../../Constants/Recipe";
import RecipeCard from "./RecipeCard";
import SearchBar from "../Filters/SearchBar";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const getRecipes = async () => {
    try {
      const recipes = await axios.get("http://localhost:3004/recipes");
      setRecipes(recipes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchInput(event.target.value);

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchInput));

  useEffect(() => {
    getRecipes();
  }, [searchInput]);

  return (
    <div>
      <h1>My Recipes</h1>
      <SearchBar
        handleInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      <div className="recipe-list">
        {filterRecipes(recipes).map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
