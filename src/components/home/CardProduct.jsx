import { useNavigate } from "react-router-dom";
import "./styles/CardProduct.css";
import { postCartThunk } from "../../store/slice/cart.slice";
import { useDispatch } from "react-redux";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(product));
  };

  return (
    <article className="product" onClick={handleDetail}>
      <header className="product__header">
        <div className="product__img-container">
          <img className="product__img" src={product.images[0].url} alt="" />
        </div>
        <div className="product__img-container">
          <img className="product__img" src={product.images[1].url} alt="" />
        </div>
      </header>
      <section className="product__body">
        <header className="product__titles">
          <h3 className="product__brand">{product.brand}</h3>
          <h2 className="product__name">{product.title}</h2>
        </header>
        <div className="product__price">
          <h3 className="product__price-label">Price</h3>
          <h2 className="product__price-value">{product.price}</h2>
        </div>
        <button className="product__btn" onClick={handleAddCart}>
          <i className="bx bxs-cart"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
