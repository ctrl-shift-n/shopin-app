import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    allData: allDataSlice.reducer,
    cart: cartSlice.reducer,
  },
});
