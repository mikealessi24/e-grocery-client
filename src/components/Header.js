import React from "react";

import "../style/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">Cart</div>
      <div className="header__number">num items</div>
    </div>
  );
}
