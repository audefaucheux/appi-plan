import React from "react";
import Direction from "../../../Types/Direction";
import deleteIcon from "images/delete-icon.png";

interface DirectionRowProps {
  index: number;
  direction: Direction;
  handleDesciptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  handleDeleteDirection: (index: number) => void;
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
      <img
        src={deleteIcon}
        alt="delete"
        className="delete-icon"
        onClick={() => handleDeleteDirection(index)}
      />
    </div>
  );
};

export default DirectionRow;
