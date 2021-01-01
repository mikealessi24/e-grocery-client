import React from "react";

import "../style/inventoryItem.css";

import Quantity from "../components/Quantity";

export default function InventoryItem() {
  return (
    <div className="inventoryItem">
      <div className="inventoryItem__description-container">
        <div className="inventoryItem__img-container">
          <img
            src="https://i5.walmartimages.com/asr/e575de6b-a4fa-4887-b12b-68a3b4cf37e0_1.72e90350d9498b5a6bffd62755e5ebe2.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff"
            alt="item"
          />
        </div>
        <div className="inventoryItem__description">blah blah</div>
      </div>
      <div className="inventoryItem__info">
        <Quantity />
        <div>price</div>
      </div>
    </div>
  );
}
