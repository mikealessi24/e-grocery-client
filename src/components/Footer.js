import React from "react";

import "../style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__total">
        Total <strong>$0.00</strong>
      </div>
      <div className="footer__btn">
        <button>Checkout</button>
      </div>
    </div>
  );
}
