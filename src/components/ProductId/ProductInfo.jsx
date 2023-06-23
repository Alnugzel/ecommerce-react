import React from "react";
import SimilarProducts from "./SimilarProducts";

const ProductInfo = ({ product }) => {
  console.log(product);

  return <div>{product?.title}</div>;
};

export default ProductInfo;
