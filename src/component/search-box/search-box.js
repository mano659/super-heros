import React from "react";

import "./search-box.css";

const SearchBox = ({ placeholder, changeHandler }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={changeHandler}
  ></input>
);

export default SearchBox;
