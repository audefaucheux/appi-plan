import React, { FC, Dispatch, SetStateAction, useState, MouseEvent } from "react";
import { cloneDeep } from "lodash";
import EditTag from "./EditTag";

interface TagsFormProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const TagsForm: FC<TagsFormProps> = ({ tags, setTags }) => {
  const [newTag, setNewTag] = useState<string>("");
  const clonedTags = cloneDeep(tags);

  const handleNewTagClick = (event: MouseEvent) => {
    event.preventDefault();

    if (newTag === "") {
      alert("New tag cannot be empty");
      return;
    }

    if (clonedTags.includes(newTag)) {
      alert("Tag already added");
    } else {
      clonedTags.push(newTag);
      setTags(clonedTags);
    }

    setNewTag("");
  };

  const handleDeleteTag = (event: MouseEvent, index: number) => {
    clonedTags.splice(index, 1);
    setTags(clonedTags);
  };

  return (
    <>
      <h3>Tags</h3>
      <div className="tag-list">
        <input type="text" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <button type="button" onClick={handleNewTagClick}>
          Add
        </button>
        {tags.map((tag, index) => (
          <EditTag key={index} index={index} tag={tag} handleDeleteTag={handleDeleteTag} />
        ))}
      </div>
    </>
  );
};

export default TagsForm;
