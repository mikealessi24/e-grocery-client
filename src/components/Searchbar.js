import React from "react";

import "../style/searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search my store"
        />
        <div className="searchbar__btn">Go</div>
      </div>
    </div>
  );
}
