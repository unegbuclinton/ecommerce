import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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
        toast('Already in cart');
        return;
      } else state.cartItems?.push({ num: 1, ...action.payload });
      toast.success('Added to cart');
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementValue: (state, action) => {
      const item = state.cartItems.filter(
        (item) => item.id === action.payload
      )[0];
      item.num++;
    },

    decrementValue: (state, action) => {
      const item = state.cartItems.filter(
        (item) => item.id === action.payload
      )[0];
      if (item.num > 1) {
        item.num--;
      } else {
        return;
      }
    },
    clearState: (state) => {
      state.cartItems = [];
    },
  },

  extraReducers: {},
});

export const {
  addItem,
  removeItem,
  incrementValue,
  decrementValue,
  clearState,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
