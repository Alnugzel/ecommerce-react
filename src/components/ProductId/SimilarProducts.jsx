import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../home/CardProduct";

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
    <div>
      <h2>Similar Products</h2>
      <div>
        {productsByCategory?.map((prod) => {
          if (product.id !== prod.id) {
            return <CardProduct key={prod.id} product={prod} />;
          }
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
