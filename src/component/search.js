import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
      />
    </div>
  );
};

export default Search;
