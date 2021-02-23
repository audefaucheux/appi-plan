import React from "react";
import RecipeList from "./Components/Recipes/RecipeList";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <RecipeList />
    </ChakraProvider>
  );
};

export default App;
