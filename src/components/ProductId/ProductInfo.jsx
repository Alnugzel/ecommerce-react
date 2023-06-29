import "../styles/ProductId.css";

const ProductInfo = ({ product }) => {
  console.log(product);

  return (
    <div>
      <h4>{product?.brand}</h4>
      <h2> {product?.title}</h2>
      <p>{product?.description}</p>
      <p>
        <span>Price:</span> <span>{product?.price}</span>
      </p>
      <div>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>
        Add to cart <i class="bx bx-cart-alt"></i>
      </button>
    </div>
  );
};

export default ProductInfo;
