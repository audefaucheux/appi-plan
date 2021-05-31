import React, {
  useRef,
  useEffect,
  Dispatch,
  FC,
  SetStateAction,
  MutableRefObject,
  useState,
} from "react";
import Recipe from "../../Types/Recipe";
import RecipeView from "./RecipeView";
import RecipeForm from "./RecipeForm";
import "./styles/RecipeModal.css";

interface RecipeModalProps {
  recipe?: Recipe;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | undefined>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleCreateRecipe: (recipe: Partial<Recipe>) => void;
  handleUpdateRecipe: (recipe: Recipe) => void;
  handleDeleteRecipe: (recipe: Recipe) => void;
}

const RecipeModal: FC<RecipeModalProps> = ({
  recipe,
  setSelectedRecipe,
  setOpenModal,
  handleCreateRecipe,
  handleUpdateRecipe,
  handleDeleteRecipe,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const node = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (event: any): void => {
    if (node.current && !node.current.contains(event.target)) {
      setOpenModal(false);
      setSelectedRecipe(undefined);
    }
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
    setSelectedRecipe(undefined);
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
          {recipe && (
            <button type="button" onClick={() => handleDeleteRecipe(recipe)}>
              Delete
            </button>
          )}
          <button type="button" onClick={() => setEditMode(!editMode)}>
            Edit
          </button>
          <span className="close modal-action" onClick={handleCloseModal}>
            &times;
          </span>
        </div>
        {editMode || !recipe ? (
          <RecipeForm
            recipe={recipe}
            handleCreateRecipe={handleCreateRecipe}
            handleUpdateRecipe={handleUpdateRecipe}
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
