import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/home/CardProduct";
import "../components/styles/Home.css";

const Home = () => {
  const products = useSelector((states) => states.products);
  console.log(products);

  return (
    <div className="home">
      <h1>home</h1>
      <section className="home__content">
        <ul className="home__products">
          {products?.map((product) => (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
