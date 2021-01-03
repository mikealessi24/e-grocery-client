import React from "react";

import "../style/userfunctions.css";

import SignInModal from "../components/SignInModal";

export default function UserFunctions() {
  return (
    <div className="userfunctions">
      <SignInModal />
      <div>favorites</div>
      <div>$0.00</div>
    </div>
  );
}
