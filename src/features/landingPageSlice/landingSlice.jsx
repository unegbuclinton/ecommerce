import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../api/LandingPage';

const initialState = {
  isLoading: false,
  dataItem: [],
};

export const getSomeProducts = createAsyncThunk(
  'product/getProducts',
  getProducts
);

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {},
  extraReducers: {
    [getSomeProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataItem = action.payload;
    },
    [getSomeProducts.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSomeProducts.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default landingSlice.reducer;
