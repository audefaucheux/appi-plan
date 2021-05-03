import React, { MouseEvent } from "react";
import "./styles/EditTag.css";

interface EditTagProps {
  tag: string;
  index: number;
  handleDeleteTag: (e: MouseEvent, index: number) => void;
}

const EditTag: React.FC<EditTagProps> = ({ tag, index, handleDeleteTag }) => {
  return (
    <div className="tag">
      {tag} <span onClick={(e) => handleDeleteTag(e, index)}>&times;</span>
    </div>
  );
};

export default EditTag;
