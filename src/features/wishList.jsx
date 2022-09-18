import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  wishList: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
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

export const { addItem, removeItem } = wishListSlice.actions;
export default wishListSlice.reducer;
