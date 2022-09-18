import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { singleProduct } from '../api/singleProduct';

const initialState = {
  isLoading: false,
  productItem: [],
};

export const getSingleProduct = createAsyncThunk(
  'product/getProduct',
  singleProduct
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productItem = action.payload;
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default productSlice.reducer;
