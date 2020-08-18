import React from "react";

function Footer({ id, Product, Price, qty }) {
  const total = Price * qty;

  return (
    <div className="CartItem">
      <h2>{Product}</h2>
      <h2>{Price}</h2>
      <button>-</button>
      <h2>{qty}</h2>
      <button>+</button>
      <h2>{total}</h2>
    </div>
  );
}

export default Footer;
