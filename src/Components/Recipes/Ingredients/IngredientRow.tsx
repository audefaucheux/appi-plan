import React from "react";
import Ingredient from "../../../Types/Ingredient";
import deleteIcon from "images/delete-icon.png";

interface IngredientsFormProps {
  index: number;
  ingredient: Ingredient;
  handleIngredientChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Ingredient,
    index: number
  ) => void;
  handleIngredientDelete: (index: number) => void;
}

const IngredientRow: React.FC<IngredientsFormProps> = ({
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
          id={`ingredient-quantity-${index}`}
          type="text"
          value={quantity}
          onChange={(e) => {
            handleIngredientChange(e, "quantity", index);
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
        <img
          src={deleteIcon}
          alt="delete"
          className="delete-icon"
          onClick={() => handleIngredientDelete(index)}
        />
      </td>
    </tr>
  );
};

export default IngredientRow;
