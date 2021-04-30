import React from "react";
import { cloneDeep } from "lodash";
import Ingredient from "Types/Ingredient";
import IngredientRow from "./IngredientRow";

interface IngredientsFormProps {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

const IngredientsForm: React.FC<IngredientsFormProps> = ({
  ingredients,
  setIngredients,
}) => {
  const emptyIngredientRow: Ingredient = {
    name: "",
    quantity: "",
  };

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => {
    const clonedIngredients = cloneDeep(ingredients);
    if (!clonedIngredients[index]) {
      clonedIngredients.splice(index, 0, emptyIngredientRow);
    }
    clonedIngredients[index][field] = event.target.value;
    setIngredients(clonedIngredients);
  };

  const handleIngredientDelete = (index: number) => {
    const clonedIngredients = cloneDeep(ingredients);
    clonedIngredients.splice(index, 1);
    setIngredients(clonedIngredients);
  };

  return (
    <div>
      <h3>Ingredients:</h3>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <IngredientRow
              key={index}
              index={index}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
            />
          ))}
          <IngredientRow
            key={ingredients.length}
            index={ingredients.length}
            ingredient={emptyIngredientRow}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsForm;
