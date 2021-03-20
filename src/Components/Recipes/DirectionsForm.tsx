import React from "react";
import { cloneDeep, identity, some } from "lodash";
import Direction from "../../Types/Direction";

interface DirectionsFormProps {
  directions: Direction[];
  setDirections: React.Dispatch<React.SetStateAction<Direction[]>>;
}

const DirectionsForm: React.FC<DirectionsFormProps> = ({
  directions,
  setDirections,
}) => {
  const reassignDirectionsOrder = (directions: Direction[]): Direction[] =>
    directions.map((direction, index) => ({
      ...direction,
      order: index + 1,
    }));

  const removeEmptyRows = (directions: Direction[]): Direction[] =>
    directions.filter((direction) => some(direction, identity));

  const handleDesciptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const clonedDirections = cloneDeep(directions);
    clonedDirections[index].description = event.target.value;
    const directionsNoEmptyRows = removeEmptyRows(clonedDirections);
    setDirections(directionsNoEmptyRows);
  };

  const handleDeleteDirection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const clonedDirections = cloneDeep(directions);
    clonedDirections.splice(index, 1);
    const reorderedDirections = reassignDirectionsOrder(clonedDirections);
    setDirections(reorderedDirections);
  };

  const hasEmptyRow = (directions: Direction[]): boolean => {
    const findEmptyRow = directions.find(
      (direction) => direction.description === ""
    );
    return !!findEmptyRow;
  };

  const addEmptyRow = (directions: Direction[]): Direction[] => {
    if (!hasEmptyRow(directions)) {
      const emptyRow: Direction = {
        order: directions.length + 1,
        description: "",
      };

      directions.push(emptyRow);
    }

    return directions;
  };

  return (
    <div>
      <h3>Directions</h3>
      {addEmptyRow(directions).map((direction, index) => (
        <div key={index} className="direction-update">
          {direction.order}.
          <textarea
            value={direction.description}
            onChange={(e) => handleDesciptionChange(e, index)}
          />
          <button onClick={(e) => handleDeleteDirection(e, index)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DirectionsForm;
