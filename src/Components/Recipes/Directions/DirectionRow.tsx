import React, { FC, MouseEvent, ChangeEvent } from "react";
import Direction from "../../../Types/Direction";
import "./styles/DirectionRow.css";

interface DirectionRowProps {
  index: number;
  direction: Direction;
  handleDesciptionChange: (event: ChangeEvent<HTMLTextAreaElement>, index: number) => void;
  handleDeleteDirection: (event: MouseEvent, index: number) => void;
}

const DirectionRow: FC<DirectionRowProps> = ({
  index,
  direction,
  handleDesciptionChange,
  handleDeleteDirection,
}) => {
  return (
    <tr key={index}>
      <td>{direction.order}</td>
      <td>
        <textarea
          className="direction-description-update"
          value={direction.description}
          onChange={(e) => handleDesciptionChange(e, index)}
        />
      </td>
      <td>
        <button type="button" onClick={(e) => handleDeleteDirection(e, index)}>
          &times;
        </button>
      </td>
    </tr>
  );
};

export default DirectionRow;
