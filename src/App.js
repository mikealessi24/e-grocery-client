import React from "react";
import Navbar from "../src/components/Navbar";
import Store from "../src/components/Store";
import Cart from "../src/components/Cart";

import "../src/style/app.css";
import "../src/style/main.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Store />
        <Cart />
      </div>
    </div>
  );
}

export default App;
