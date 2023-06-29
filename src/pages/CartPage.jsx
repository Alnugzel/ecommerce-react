import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartElement from "../components/cart/CartElement";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  console.log(cart);
  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.map((prod) => (
          <CartElement key={cart.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
