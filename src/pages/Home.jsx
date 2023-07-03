import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/home/CardProduct";
import "../components/styles/Home.css";
import FilterCategory from "../components/home/FilterCategory";
import FilterPrice from "../components/home/FilterPrice";

const Home = () => {
  const products = useSelector((states) => states.products);

  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  });

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const cbFilter = (product) =>
    product.title.toLowerCase().includes(inputValue);

  const cbFilterPrice = (product) => {
    const condMin = priceMinMax.min <= product.price;
    const condMax = product.price <= priceMinMax.max;

    return condMin && condMax;
  };

  return (
    <div className="home">
      <aside>
        <FilterPrice
          priceMinMax={priceMinMax}
          setPriceMinMax={setPriceMinMax}
        />
        <FilterCategory />
      </aside>
      <section className="home__content">
        {
          <input
            value={inputValue}
            className="home__search"
            onChange={handleSearchName}
            type="text"
            placeholder="Search Product By Name"
          />
        }
        <ul className="home__products">
          {products
            ?.filter(cbFilter)
            .filter(cbFilterPrice)
            .map((product) => (
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
