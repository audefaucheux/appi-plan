import React from "react";
import Ingredient from "Types/Ingredient";

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredients.map(({ amount, measurement, name, notes }, index) => (
        <div key={index}>
          {amount} {measurement} {name} {notes}
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
