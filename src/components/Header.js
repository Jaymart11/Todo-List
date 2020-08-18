import React from "react";
import Footer from "./Footer";

function Header({ items }) {
  // const [newItem, setQuantity] = useState(items);
  const grandTotal = items.reduce(
    (total, item) => total + item.qty * item.Price,
    0
  );

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Footer key={item.id} {...item} />
        ))}
        <h2>Total: {grandTotal}</h2>
      </ul>
    </div>
  );
}

export default Header;
