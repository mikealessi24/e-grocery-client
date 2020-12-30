import React from "react";

import "../style/item.css";

export default function Item() {
  return (
    <div className="item">
      <div className="item__fav">fav</div>
      <div className="item__img-container">
        <img
          src="https://i5.walmartimages.com/asr/e575de6b-a4fa-4887-b12b-68a3b4cf37e0_1.72e90350d9498b5a6bffd62755e5ebe2.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff"
          alt="item"
        />
      </div>
      <div className="item__price">$0.00</div>
      <div className="item__description">chocolate milk</div>
      <div className="item__btn-container">
        <button>add to cart</button>
      </div>
    </div>
  );
}
