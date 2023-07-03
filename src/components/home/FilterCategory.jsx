import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../store/slice/products.slice";

const FilterCategory = () => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  const [categories, getCategories] = useFetch(baseUrl);

  useEffect(() => {
    getCategories("/categories");
  }, []);

  const dispatch = useDispatch();

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
      dispatch(getAllProductsThunk(url));
    } else {
      dispatch(getAllProductsThunk());
    }
  };

  return (
    <article>
      <h3>Categories</h3>
      <ul>
        <li
          onClick={() => handleFilterCategory()}
          style={{ cursor: "pointer" }}
        >
          All Products
        </li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFilterCategory(category.id)}
            style={{ cursor: "pointer" }}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
