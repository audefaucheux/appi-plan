import React from "react";
import Ingredient from "Types/Ingredient";

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredients.map(({ quantity, name }, index) => (
        <div key={index}>
          {quantity} {name}
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
