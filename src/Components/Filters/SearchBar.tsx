import React, { ChangeEvent, FC } from "react";
import "./styles/SearchBar.css";

interface SearchBarProps {
  searchInput: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchInput, handleInputChange }) => {
  return (
    <input
      id="recipe-name-search"
      type="text"
      placeholder="Recipe Name"
      onChange={handleInputChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
