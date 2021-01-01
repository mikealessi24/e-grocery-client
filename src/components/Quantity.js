import React from "react";

import "../style/quantity.css";

export default function Quantity() {
  return (
    <div className="quantity">
      <div className="quantity__subtract">-</div>
      <div className="quantity__num">num</div>
      <div className="quantity__add">+</div>
    </div>
  );
}
