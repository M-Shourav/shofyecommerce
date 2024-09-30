import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}
const initialState: InitialState = {
  cart: [],
  favorite: [],
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
    deleteItems: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    removeCart: (state, action) => {
      state.cart = state.favorite.filter((item) => item?.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },

    addToFavorite: (state, action) => {
      const existingProduct = state?.favorite.find(
        (item) => item?.id === action.payload.id
      );
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item?.id !== action.payload.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetFavorite: (state) => {
      state.favorite = [];
    },
    deletefavItems: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item?.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  addUser,
  removeUser,
  increaseItems,
  decreaseItems,
  deleteItems,
  removeCart,
  resetCart,
  resetFavorite,
  addToFavorite,
  deletefavItems,
} = shofySlice.actions;

export default shofySlice.reducer;
