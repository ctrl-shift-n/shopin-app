import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },

    increaseQuantity: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },

    decreaseQuantity: (state, action) => {
      if (action.payload.quantity === 1) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      } else {
        state.data = state.data.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity -= 1;
          }
          return item;
        });
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice;
