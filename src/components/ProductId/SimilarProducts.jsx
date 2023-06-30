import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../home/CardProduct";
import "../styles/ProductInfo.css";

const SimilarProducts = ({ product }) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  const [productsByCategory, getProductsByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.category.id}`);
    }
  }, [product]);

  console.log(productsByCategory);

  return (
    <>
      <h2 className="similarProducts__title">Similar Products</h2>
      <div className="similarProducts__content">
        <div className="">
          {productsByCategory?.map((prod) => {
            if (product.id !== prod.id) {
              return (
                <div className="similarProducts__product">
                  <CardProduct key={prod.id} product={prod} />{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
