import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  cartItems: [],
};

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (item) {
        return;
      } else state.cartItems?.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {},
});

export const { addItem, removeItem } = addToCartSlice.actions;
export default addToCartSlice.reducer;
