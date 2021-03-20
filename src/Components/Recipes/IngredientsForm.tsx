import React from "react";
import { cloneDeep, some, identity } from "lodash";
import Ingredient from "Types/Ingredient";

interface IngredientsFormProps {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

const IngredientsForm: React.FC<IngredientsFormProps> = ({
  ingredients,
  setIngredients,
}) => {
  const removeEmptyRows = (ingredients: Ingredient[]): Ingredient[] =>
    ingredients.filter((ingredient) => some(ingredient, identity));

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => {
    const clonedIngredients = cloneDeep(ingredients);
    clonedIngredients[index][field] = event.target.value;
    const ingredientsNoEmptyRows = removeEmptyRows(clonedIngredients);
    setIngredients(ingredientsNoEmptyRows);
  };

  const handleDeleteIngredient = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const clonedIngredients = cloneDeep(ingredients);
    clonedIngredients.splice(index, 1);
    setIngredients(clonedIngredients);
  };

  const hasEmptyRow = (ingredients: Ingredient[]): boolean => {
    const findEmptyRow = ingredients.find(
      (ingredient) => !some(ingredient, identity)
    );
    return !!findEmptyRow;
  };

  const addEmptyRow = (ingredients: Ingredient[]): Ingredient[] => {
    if (!hasEmptyRow(ingredients)) {
      const emptyRow: Ingredient = {
        name: "",
        amount: "",
        measurement: "",
        notes: "",
      };

      ingredients.push(emptyRow);
    }

    return ingredients;
  };

  return (
    <div>
      <h3>Ingredients:</h3>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Measurement</th>
            <th>Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {addEmptyRow(ingredients).map(
            ({ amount, measurement, name, notes }, index) => (
              <tr key={index}>
                <td>
                  <input
                    id={`ingredient-amount-${index}`}
                    type="text"
                    value={amount}
                    onChange={(e) => {
                      handleIngredientChange(e, "amount", index);
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`ingredient-measurement-${index}`}
                    type="text"
                    value={measurement}
                    onChange={(e) => {
                      handleIngredientChange(e, "measurement", index);
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`ingredient-name-${index}`}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      handleIngredientChange(e, "name", index);
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`ingredient-notes-${index}`}
                    type="text"
                    value={notes}
                    onChange={(e) => {
                      handleIngredientChange(e, "notes", index);
                    }}
                  />
                </td>
                <td>
                  <button onClick={(e) => handleDeleteIngredient(e, index)}>
                    delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsForm;
