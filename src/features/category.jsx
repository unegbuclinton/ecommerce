import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../api/allpproducts';
import { getProductsByCategory } from '../api/category';

const initialState = {
  isLoading: false,
  allProducts: [],
};

export const allStoreProducts = createAsyncThunk(
  'category/getProducts',
  getAllProducts
);

export const getByCategory = createAsyncThunk(
  'category/getCategory',
  getProductsByCategory
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
    [getByCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    [getByCategory.rejected]: (state) => {
      state.isLoading = false;
    },
    [getByCategory.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default categorySlice.reducer;
