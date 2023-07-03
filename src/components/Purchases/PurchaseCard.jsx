import "../styles/PurchasesPage.css";

const PurchaseCard = ({ prod }) => {
  return (
    <article className="purchases__main">
      <h3>{prod.product.title}</h3>
      <div className="purchases">
        <div>
          <b>
            <span className="purchases__quantity">{prod.quantity}</span> x{" "}
            <span> {prod.product.price}</span>
          </b>
        </div>
        <div className="purchases__img-content">
          <img
            className="purchases__img"
            src={prod.product.images[0].url}
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default PurchaseCard;
