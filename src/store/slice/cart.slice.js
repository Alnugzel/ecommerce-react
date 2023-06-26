import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartG: (state, action) => action.payload,
    addProductCartG: (state, action) => [...state, action.payload],
    deleteProductG: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { setCartG, addProductCartG, deleteProductG } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
  axios
    .get(url, getConfigAuth())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => console.log(err));
};

export const postCartThunk = (prod) => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

  const data = {
    quantity: 1,
    productId: prod.id,
  };

  axios
    .post(url, data, getConfigAuth())
    .then((res) => {
      console.log(res.data);
      dispatch(addProductCartG(res.data));
    })
    .catch((err) => console.log(err));
};
