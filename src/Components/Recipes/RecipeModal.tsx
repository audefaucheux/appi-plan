import React, { useRef, useEffect, useState } from "react";
import Recipe from "Types/Recipe";
import RecipeView from "./RecipeView";
import RecipeForm from "./RecipeForm";

interface RecipeModalProps {
  recipe: Recipe;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveRecipe: (recipe: Recipe) => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  setOpenModal,
  handleSaveRecipe,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (event: any): void => {
    if (node.current && !node.current.contains(event.target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" ref={node}>
        <button onClick={() => setEditMode(!editMode)}>Edit</button>
        <span className="close" onClick={() => setOpenModal(false)}>
          &times;
        </span>
        {editMode ? (
          <RecipeForm
            recipe={recipe}
            handleSaveRecipe={handleSaveRecipe}
            setEditMode={setEditMode}
          />
        ) : (
          <RecipeView recipe={recipe} />
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
