import React from "react";

const CartElement = ({ prod }) => {
  return (
    <div>
      {prod.id}
      <img src={prod.product.images[0].url} alt="" />
    </div>
  );
};

export default CartElement;
