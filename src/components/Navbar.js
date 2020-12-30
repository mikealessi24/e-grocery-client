import React from "react";

import Searchbar from "../components/Searchbar";
import Logo from "../components/Logo";
import UserFunctions from "../components/UserFunctions";

import "../style/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Searchbar />
      <UserFunctions />
    </div>
  );
}
