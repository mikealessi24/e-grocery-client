import React from "react";

import "../style/logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo__img-container">
        <img
          src="https://www.vmcdn.ca/f/files/via/import/2017/11/23164825_homer-simpson-doughnut.jpg;w=960"
          alt="logo"
        />
      </div>
      <div className="logo__title">e-Grocery</div>
    </div>
  );
}
