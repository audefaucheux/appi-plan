import React, { FC } from "react";
import Direction from "../../../Types/Direction";

interface DirectionsListProps {
  directions: Direction[];
}

const DirectionsList: FC<DirectionsListProps> = ({ directions }) => {
  const orderDirections = (directions: Direction[]): Direction[] =>
    directions.sort((a, b) => a.order - b.order);

  return (
    <div>
      <h3>Directions</h3>
      {orderDirections(directions).map((direction, index) => (
        <div key={index}>
          {direction.order}. {direction.description}
        </div>
      ))}
    </div>
  );
};

export default DirectionsList;
