import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: ProductType[];
  userInfo: any;
}
const initialState: InitialState = {
  cart: [],
  userInfo: null,
};
export const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart.find(
        (item) => item?.id === action?.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });

        toast.success(
          `${action?.payload?.title.slice(0, 10)}... added successfully`
        );
      }
    },

    increaseItems: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseItems: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addToCart, addUser, removeUser, increaseItems, decreaseItems } =
  shofySlice.actions;

export default shofySlice.reducer;
