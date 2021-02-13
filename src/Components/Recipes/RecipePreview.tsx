import React, { Dispatch, SetStateAction, useRef, useEffect } from "react";
import Recipe from "../../Constants/Recipe";

interface RecipePreviewProps {
  recipe: Recipe;
  setOpenPreview: Dispatch<SetStateAction<boolean>>;
}

const RecipePreview: React.FC<RecipePreviewProps> = ({
  recipe,
  setOpenPreview,
}) => {
  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (event: any): void => {
    if (node.current.contains(event.target)) {
      setOpenPreview(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="myModal" className="modal" ref={node}>
      <div className="modal-content">
        <span className="close" onClick={() => setOpenPreview(false)}>
          &times;
        </span>
        <p>{recipe.name}</p>
      </div>
    </div>
  );
};

export default RecipePreview;
