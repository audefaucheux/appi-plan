import React from "react";
import "./styles/DisplayTag.css";

interface DisplayTagProps {
  tag: string;
}

const DisplayTag: React.FC<DisplayTagProps> = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

export default DisplayTag;
