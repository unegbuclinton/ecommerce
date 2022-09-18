import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../api/allpproducts';

const initialState = {
  isLoading: false,
  allProducts: [],
};

export const allStoreProducts = createAsyncThunk(
  'category/getProducts',
  getAllProducts
);

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [allStoreProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    [allStoreProducts.rejected]: (state) => {
      state.isLoading = false;
    },
    [allStoreProducts.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default categorySlice.reducer;
