import { configureStore } from "@reduxjs/toolkit";
import shofyReducers from "./shofySlice";

export const store = configureStore({
  reducer: {
    shopy: shofyReducers,
  },
});
