import React from "react";
import "./styles/SearchBar.css";

interface SearchBarProps {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  handleInputChange,
}) => {
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
