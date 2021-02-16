import React, { Dispatch, SetStateAction, useRef, useEffect } from "react";
import Recipe from "../../Types/Recipe";
import IngredientsList from "./IngredientsList";
import Directions from "./Directions";
import NutritionalInformation from "./NutritionalInformation";
import placeholderImage from "../../images/placeholder-image.png";

interface RecipePreviewProps {
  recipe: Recipe;
  setOpenPreview: Dispatch<SetStateAction<boolean>>;
}

const RecipePreview: React.FC<RecipePreviewProps> = ({
  recipe,
  setOpenPreview,
}) => {
  const {
    title,
    preparationTime,
    cookingTime,
    ingredients,
    directions,
    nutritionalInfo,
  } = recipe;

  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (event: any): void => {
    if (node.current.contains(event.target)) {
      setOpenPreview(false);
    }
  };

  const convertMinutesToHours = (time: number | undefined): string => {
    if (!time) return "";

    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const renderHours = hours < 1 ? "" : `${hours}h`;
    const renderMinutes =
      minutes < 10 && hours >= 1 ? `0${minutes}min` : `${minutes}min`;
    return `${renderHours}${renderMinutes}`;
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
        <p>{title}</p>

        <img src={placeholderImage} alt="placeholderImage" />
        <p>Preparation Time: {convertMinutesToHours(preparationTime)}</p>
        <p>Cooking Time: {convertMinutesToHours(cookingTime)}</p>
        <IngredientsList ingredients={ingredients} />
        <Directions directions={directions} />
        {nutritionalInfo && (
          <NutritionalInformation nutritionalInfo={nutritionalInfo} />
        )}
      </div>
    </div>
  );
};

export default RecipePreview;
