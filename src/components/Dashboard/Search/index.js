import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Define a functional component called Search that takes 'search' and 'OnSearchChange' props
const Search = ({ search, OnSearchChange }) => {
  // Render the Search component, which includes a search input field and an icon
  return (
    <div className="search-flex">
      <SearchRoundedIcon /> {/* Search icon */}
      <input
        placeholder="Search here"
        value={search}
        onChange={(e) => OnSearchChange(e)} // Handle search input change
        type="text"
      />
    </div>
  );
};

export default Search; // Export the Search component
