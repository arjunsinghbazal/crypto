import React from "react";
import "./style.css"
import SearchRoundedicon from "@mui/icons-material/SearchRounded";

const Search=({search,OnSearchChange})=>{


    return<div className="search-flex">
    <SearchRoundedicon/>
        <input placeholder="Search here" 
        value={search} onChange={(e)=>OnSearchChange(e)}
         type="text"/>
    </div>
}


export default Search;