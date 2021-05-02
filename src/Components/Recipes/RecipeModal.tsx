import React, { useRef, useEffect, useState } from "react";
import Recipe from "../../Types/Recipe";
import RecipeView from "./RecipeView";
import RecipeForm from "./RecipeForm";
import editIcon from "images/edit-icon.png";
import "./styles/RecipeModal.css";

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
        <div className="modal-actions-menu">
          <img
            className="modal-action"
            src={editIcon}
            onClick={() => setEditMode(!editMode)}
            alt="edit-icon"
          />
          <span
            className="close modal-action"
            onClick={() => setOpenModal(false)}
          >
            &times;
          </span>
        </div>
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
