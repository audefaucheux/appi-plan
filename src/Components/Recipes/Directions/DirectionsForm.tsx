import React from "react";
import { cloneDeep } from "lodash";
import Direction from "../../../Types/Direction";
import DirectionRow from "./DirectionRow";

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

  const createEmptyDirectionRow = (order: number): Direction => ({
    order,
    description: "",
  });

  const handleDesciptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const clonedDirections = cloneDeep(directions);
    if (!clonedDirections[index]) {
      clonedDirections.splice(index, 0, createEmptyDirectionRow(index + 1));
    }
    clonedDirections[index].description = event.target.value;
    setDirections(clonedDirections);
  };

  const handleDeleteDirection = (index: number) => {
    const clonedDirections = cloneDeep(directions);
    clonedDirections.splice(index, 1);
    const reorderedDirections = reassignDirectionsOrder(clonedDirections);
    setDirections(reorderedDirections);
  };

  return (
    <div>
      <h3>Directions</h3>
      {directions.map((direction, index) => (
        <DirectionRow
          key={index}
          index={index}
          direction={direction}
          handleDesciptionChange={handleDesciptionChange}
          handleDeleteDirection={handleDeleteDirection}
        />
      ))}
      <DirectionRow
        key={directions.length}
        index={directions.length}
        direction={createEmptyDirectionRow(directions.length + 1)}
        handleDesciptionChange={handleDesciptionChange}
        handleDeleteDirection={handleDeleteDirection}
      />
    </div>
  );
};

export default DirectionsForm;
