import React from "react";
import "../style/cart.css";

import Header from "../components/Header.js";
import Inventory from "../components/Inventory.js";
import Footer from "../components/Footer.js";

export default function Cart() {
  return (
    <div className="cart">
      <Header />
      <Inventory />
      <Footer />
    </div>
  );
}
