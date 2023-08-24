import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllData = createAsyncThunk(
  "get-all-data",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?skip=0&limit=100"
      );
      return response.data?.products;
    } catch (err) {
      return rejectWithValue("Error occured");
    }
  }
);

const initialState = {
  productData: [],
  loading: false,
  error: null,
};

const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default allDataSlice;
