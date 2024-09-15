import { configureStore } from "@reduxjs/toolkit";
import shofyReducers from "./shofySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistconfig, shofyReducers);
export const store = configureStore({
  reducer: {
    shopy: persistedReducer,
  },
});

export const persiststore = persistStore(store);
