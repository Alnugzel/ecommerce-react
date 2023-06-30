import "../styles/ProductInfo.css";

const ProductInfo = ({ product }) => {
  console.log(product);

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
            <button className="productInfo__btn-Q">-</button>
            <p className="productInfo__quantity">0</p>
            <button className="productInfo__btn-Q">+</button>
          </div>
        </div>
      </div>
      <button className="productInfo__btn-cart">
        Add to cart <i class="bx bx-cart-alt"></i>
      </button>
      <p className="productInfo__description">{product?.description}</p>
    </div>
  );
};

export default ProductInfo;
