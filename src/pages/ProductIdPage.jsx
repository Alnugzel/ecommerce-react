import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductInfo from "../components/ProductId/ProductInfo";
import SimilarProducts from "../components/ProductId/SimilarProducts";

const ProductIdPage = () => {
  const { id } = useParams();
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <div>
      <ProductInfo product={product} />
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductIdPage;
