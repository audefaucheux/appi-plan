import React from "react";
import Direction from "Types/Direction";

interface DirectionRowProps {
  index: number;
  direction: Direction;
  handleDesciptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  handleDeleteDirection: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
}

const DirectionRow: React.FC<DirectionRowProps> = ({
  index,
  direction,
  handleDesciptionChange,
  handleDeleteDirection,
}) => {
  return (
    <div key={index} className="direction-update">
      {direction.order}.
      <textarea
        value={direction.description}
        onChange={(e) => handleDesciptionChange(e, index)}
      />
      <button onClick={(e) => handleDeleteDirection(e, index)}>delete</button>
    </div>
  );
};

export default DirectionRow;
