import React, { MouseEvent, FC, ChangeEvent } from "react";
import Ingredient from "../../../Types/Ingredient";

interface IngredientsFormProps {
  index: number;
  ingredient: Ingredient;
  handleIngredientChange: (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => void;
  handleIngredientDelete: (event: MouseEvent, index: number) => void;
}

const IngredientRow: FC<IngredientsFormProps> = ({
  index,
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) => {
  const { name, quantity } = ingredient;

  return (
    <tr key={index}>
      <td>
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            handleIngredientChange(e, "quantity", index);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            handleIngredientChange(e, "name", index);
          }}
        />
      </td>
      <td>
        <button type="button" onClick={(e) => handleIngredientDelete(e, index)}>
          &times;
        </button>
      </td>
    </tr>
  );
};

export default IngredientRow;
