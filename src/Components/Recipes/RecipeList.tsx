import React, { useState, useEffect } from "react";
import Recipe from "../../Types/Recipe";
import RecipeCard from "./RecipeCard";
import SearchBar from "../Filters/SearchBar";
import RecipeModal from "./RecipeModal";
import { getRecipes } from "../../Services/AppiPlanBackend";
import { updateRecipe } from "../../Services/AppiPlanBackend";
import "./styles/RecipeList.css";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchInput(event.target.value.toLocaleLowerCase());

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter(({ title }) => title.toLowerCase().includes(searchInput));

  const handleAddRecipe = () => {
    console.log("Add recipe");
    setOpenModal(true);
  };

  const handleSaveRecipe = (updatedRecipe: Recipe): void => {
    setSelectedRecipe(updatedRecipe);
    updateRecipe(updatedRecipe);
  };

  const displayModalContent = () =>
    selectedRecipe ? (
      <RecipeModal
        recipe={selectedRecipe}
        handleSaveRecipe={handleSaveRecipe}
        setSelectedRecipe={setSelectedRecipe}
        setOpenModal={setOpenModal}
      />
    ) : (
      <div>Hello</div>
    );

  useEffect(() => {
    getRecipes(setRecipes);
  }, [selectedRecipe]);

  return (
    <div>
      <h1>My Recipes</h1>
      <div id="recipe-filters">
        <div id="search-label">Search: </div>
        <SearchBar
          handleInputChange={handleSearchInputChange}
          searchInput={searchInput}
        />
        <button id="add-recipe" onClick={handleAddRecipe}>
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
      {openModal && displayModalContent()}
    </div>
  );
};

export default RecipeList;
