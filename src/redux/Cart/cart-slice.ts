import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";
interface CartState {
  cart: Product[];
}
const initialState: CartState = {
  cart: [], // inicialmente array vazio
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = [
        ...state.cart,
        action.payload,
      ];
    },
    removeProduct: (state, action) => {
      state.cart =
        state.cart.filter((product) => product.id !== action.payload.id);
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;