import React from "react";
import Ingredient from "../../Types/Ingredient";

interface IngredientsFormProps {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

const IngredientsForm: React.FC<IngredientsFormProps> = ({
  ingredients,
  setIngredients,
}) => {
  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => {
    // TO DO: handle empty rows
    const clonedIngredients = JSON.parse(JSON.stringify(ingredients));
    const ingredient = clonedIngredients[index];
    ingredient[field] = event.target.value;
    setIngredients(clonedIngredients);
  };

  const handleDeleteIngredient = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const clonedIngredients = JSON.parse(JSON.stringify(ingredients));
    clonedIngredients.splice(index, 1);
    setIngredients(clonedIngredients);
  };

  const hasEmptyRow = (ingredients: Ingredient[]): boolean => {
    const findEmptyRow = ingredients.find((ingredient) =>
      Object.values(ingredient).every((value) => value === "")
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
