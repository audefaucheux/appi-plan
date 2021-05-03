import React, { MouseEvent, ChangeEvent, Dispatch, SetStateAction, FC } from "react";
import { cloneDeep } from "lodash";
import Direction from "../../../Types/Direction";
import DirectionRow from "./DirectionRow";

interface DirectionsFormProps {
  directions: Direction[];
  setDirections: Dispatch<SetStateAction<Direction[]>>;
}

const DirectionsForm: FC<DirectionsFormProps> = ({ directions, setDirections }) => {
  const clonedDirections = cloneDeep(directions) || [];
  const emptyDirection = {
    order: clonedDirections.length + 1,
    description: "",
  };

  const reassignDirectionsOrder = (directions: Direction[]): Direction[] =>
    directions.map((direction, index) => ({
      ...direction,
      order: index + 1,
    }));

  const handleDesciptionAdd = (event: MouseEvent) => {
    event.preventDefault();
    clonedDirections.push(emptyDirection);
    setDirections(clonedDirections);
  };

  const handleDesciptionChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    clonedDirections[index].description = event.target.value;
    setDirections(clonedDirections);
  };

  const handleDeleteDirection = (event: MouseEvent, index: number) => {
    event.preventDefault();
    clonedDirections.splice(index, 1);
    const reorderedDirections = reassignDirectionsOrder(clonedDirections);
    setDirections(reorderedDirections);
  };

  return (
    <div>
      <h3>Directions:</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clonedDirections.map((direction, index) => (
            <DirectionRow
              key={index}
              index={index}
              direction={direction}
              handleDesciptionChange={handleDesciptionChange}
              handleDeleteDirection={handleDeleteDirection}
            />
          ))}
          <tr>
            <td>
              <button type="button" onClick={handleDesciptionAdd}>
                + Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DirectionsForm;
