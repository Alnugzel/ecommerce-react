import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "product",
  initialState: null,
  reducers: { setProductsG: (state, acitons) => acitons.payload },
});

const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProductsThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
  axios
    .get(url)
    .then((res) => dispatch(setProductsG(res.data)))
    .catch((err) => console.log(err));
};
