import React, { useEffect, SetStateAction, Dispatch, MouseEvent, ChangeEvent, FC } from "react";
import { cloneDeep } from "lodash";
import Ingredient from "../../../Types/Ingredient";
import IngredientRow from "./IngredientRow";
// import NewIngredientRow from "./NewIngredientRow";

interface IngredientsFormProps {
  ingredients: Ingredient[];
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
}

const IngredientsForm: FC<IngredientsFormProps> = ({ ingredients, setIngredients }) => {
  const clonedIngredients = cloneDeep(ingredients) || [];
  const emptyRow: Ingredient = { quantity: "", name: "" };

  const handleIngredientAdd = (event: MouseEvent) => {
    event.preventDefault();
    clonedIngredients.push(emptyRow);
    setIngredients(clonedIngredients);
  };

  const handleIngredientChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => {
    event.preventDefault();
    clonedIngredients[index][field] = event.target.value;
    setIngredients(clonedIngredients);
  };

  const handleIngredientDelete = (e: MouseEvent, index: number) => {
    e.preventDefault();
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
          {clonedIngredients.map((ingredient, index) => (
            <IngredientRow
              key={index}
              index={index}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
            />
          ))}
          <tr>
            <td>
              <button type="button" onClick={handleIngredientAdd}>
                + Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsForm;
