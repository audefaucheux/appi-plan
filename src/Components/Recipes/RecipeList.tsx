import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../../Types/Recipe";
import RecipeCard from "./RecipeCard";
import SearchBar from "../Filters/SearchBar";
import RecipeModal from "./RecipeModal";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>();

  // TODO : Move to service folder
  const getRecipes = async () => {
    try {
      const recipes = await axios.get("http://localhost:3004/recipes");
      setRecipes(recipes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIngredients = async () => {
    try {
      const ingredients = await axios.get("http://localhost:3004/ingredients");
      setIngredients(ingredients.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchInput(event.target.value.toLocaleLowerCase());

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter(({ title }) => title.toLowerCase().includes(searchInput));

  useEffect(() => {
    getRecipes();
    getIngredients();
  }, []);

  return (
    <div>
      <h1>My Recipes</h1>
      <SearchBar
        handleInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      <div className="recipe-list">
        {filterRecipes(recipes).map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            setOpenModal={setOpenModal}
            setSelectedRecipe={setSelectedRecipe}
          />
        ))}
      </div>
      {openModal && selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default RecipeList;
