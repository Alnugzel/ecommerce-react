import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  return (
    <div>
      <h2>Cart</h2>
      <div></div>
    </div>
  );
};

export default CartPage;
