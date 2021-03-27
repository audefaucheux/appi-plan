import React, { useState, useEffect } from "react";
import Recipe from "Types/Recipe";
import RecipeCard from "./RecipeCard";
import SearchBar from "../Filters/SearchBar";
import RecipeModal from "./RecipeModal";
import { getRecipes, getIngredients } from "Services/AppiPlanBackend";
import { updateRecipe } from "Services/AppiPlanBackend";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchInput(event.target.value.toLocaleLowerCase());

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter(({ title }) => title.toLowerCase().includes(searchInput));

  const handleSaveRecipe = (updatedRecipe: Recipe): void => {
    setSelectedRecipe(updatedRecipe);
    updateRecipe(updatedRecipe);
  };

  useEffect(() => {
    getRecipes(setRecipes);
    getIngredients(setIngredients);
  }, [selectedRecipe]);

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
        <RecipeModal
          recipe={selectedRecipe}
          handleSaveRecipe={handleSaveRecipe}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default RecipeList;
