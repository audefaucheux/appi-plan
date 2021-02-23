import React, { useState, useEffect } from "react";
import Recipe from "../../Types/Recipe";
import RecipeCard from "./RecipeCard";
import { Heading, Input, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getRecipes } from "../../Services/AppiPlanBackend/Recipes";
import { getIngredients } from "../../Services/AppiPlanBackend/Ingredients";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchInput(event.target.value);

  const filterRecipes = (recipes: Recipe[]): Recipe[] =>
    recipes.filter(({ title }) => title.toLowerCase().includes(searchInput));

  useEffect(() => {
    getRecipes(setRecipes);
    getIngredients(setIngredients);
  }, [searchInput]);

  return (
    <Box p={[4]}>
      <Heading>My Recipes</Heading>
      <Box width="30%" py={[3]}>
        <Input
          id="search-bar"
          type="text"
          placeholder="search recipe..."
          onChange={handleSearchInputChange}
          value={searchInput}
          icon={<SearchIcon />}
        />
      </Box>
      <div className="recipe-list">
        {filterRecipes(recipes).map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </Box>
  );
};

export default RecipeList;
