import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/home/CardProduct";

const Home = () => {
  const products = useSelector((states) => states.products);
  console.log(products);

  return (
    <div>
      <h1>home</h1>
      <div>
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
