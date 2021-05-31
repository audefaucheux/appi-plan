import React, { useState, useEffect, FC, ChangeEvent } from "react";
import Recipe from "../../Types/Recipe";
import RecipeCard from "./RecipeCard";
import SearchBar from "../Filters/SearchBar";
import RecipeModal from "./RecipeModal";
import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../../Services/AppiPlanBackend";
import "./styles/RecipeList.css";

const RecipeList: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value.toLocaleLowerCase());

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter(({ title }) => title.toLowerCase().includes(searchInput));

  const handleAddRecipe = () => {
    setSelectedRecipe(undefined);
    setOpenModal(true);
  };

  const handleCreateRecipe = (newRecipe: Partial<Recipe>): void => {
    createRecipe(newRecipe, setSelectedRecipe);
  };

  const handleUpdateRecipe = (updatedRecipe: Recipe): void => {
    updateRecipe(updatedRecipe, setSelectedRecipe);
  };

  const handleDeleteRecipe = (recipe: Recipe): void => {
    deleteRecipe(recipe);
    setSelectedRecipe(undefined)
    setOpenModal(false);
  };

  useEffect(() => {
    getRecipes(setRecipes);
  }, [selectedRecipe]);

  return (
    <div>
      <h1>My Recipes</h1>
      <div id="recipe-filters">
        <div id="search-label">Search: </div>
        <SearchBar handleInputChange={handleSearchInputChange} searchInput={searchInput} />
        <button type="button" id="add-recipe" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </div>
      <div id="recipe-list">
        {filterRecipes(recipes).map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            setOpenModal={setOpenModal}
            setSelectedRecipe={setSelectedRecipe}
          />
        ))}
      </div>
      {openModal && (
        <RecipeModal
          recipe={selectedRecipe}
          handleCreateRecipe={handleCreateRecipe}
          handleUpdateRecipe={handleUpdateRecipe}
          setSelectedRecipe={setSelectedRecipe}
          setOpenModal={setOpenModal}
          handleDeleteRecipe={handleDeleteRecipe}
        />
      )}
    </div>
  );
};

export default RecipeList;
