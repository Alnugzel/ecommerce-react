import { useState } from "react";
import "../styles/ProductInfo.css";
import { postCartThunk } from "../../store/slice/cart.slice";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity((state) => state - 1);
    }
  };

  const handleAdd = () => setQuantity((state) => state + 1);

  const handleAddToCart = () => {
    dispatch(postCartThunk(product, quantity));
  };

  return (
    <div className="productInfo">
      <h4 className="productInfo__brand">{product?.brand}</h4>
      <h2 className="productInfo__title"> {product?.title}</h2>
      <div className="productInfo__pq">
        <h4 className="productInfo__price">
          <span>Price:</span> <span>{product?.price}</span>
        </h4>
        <div className="productInfo__btn">
          <h4>Quantity</h4>
          <div className="productInfo__btn-btn">
            <button onClick={handleMinus} className="productInfo__btn-Q">
              -
            </button>
            <p className="productInfo__quantity">{quantity}</p>
            <button onClick={handleAdd} className="productInfo__btn-Q">
              +
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleAddToCart} className="productInfo__btn-cart">
        Add to cart <i className="bx bx-cart-alt"></i>
      </button>
      <p className="productInfo__description">{product?.description}</p>
    </div>
  );
};

export default ProductInfo;
