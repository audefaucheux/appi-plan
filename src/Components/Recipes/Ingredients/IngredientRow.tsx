import React from "react";
import Ingredient from "Types/Ingredient";

interface IngredientsFormProps {
  index: number;
  ingredient: Ingredient;
  handleIngredientChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => void;
  handleIngredientDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
}

const IngredientRow: React.FC<IngredientsFormProps> = ({
  index,
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) => {
  const { name, amount, measurement, notes } = ingredient;

  return (
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
        <button onClick={(e) => handleIngredientDelete(e, index)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default IngredientRow;
