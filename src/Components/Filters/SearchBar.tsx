import React from "react";

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
      id="search-bar"
      type="text"
      placeholder="search"
      onChange={handleInputChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
