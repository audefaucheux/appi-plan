import React from "react";
import "./styles/Tag.css";

interface TagListProps {
  tag: string;
}

const TagList: React.FC<TagListProps> = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

export default TagList;
