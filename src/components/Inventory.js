import React from "react";

import InventoryItem from "../components/InventoryItem";

import "../style/inventory.css";

export default function Inventory() {
  return (
    <div className="inventory">
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
    </div>
  );
}
