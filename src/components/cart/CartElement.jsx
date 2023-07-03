import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slice/cart.slice";

const CartElement = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id));
  };

  return (
    <article className="cartElement">
      <header className="cartElement__header">
        <img
          className="cartElement__img"
          src={prod.product.images[0].url}
          alt=""
        />
      </header>
      <section className="cartElement__section">
        <h3 className="cartElement__section-title">{prod.product.title}</h3>
        <p className="cartElement__section-qp">
          <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
          <button onClick={handleDelete}>
            <i className="bx bx-trash"></i>
          </button>
        </p>
      </section>
      <footer className="cartElement__footer">
        <span>Subtotal:</span> <span>{prod.quantity * prod.product.price}</span>
      </footer>
    </article>
  );
};

export default CartElement;
