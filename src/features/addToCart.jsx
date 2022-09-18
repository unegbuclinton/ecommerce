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
      } else state.cartItems?.push({ num: 1, ...action.payload });
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
  },

  extraReducers: {},
});

export const { addItem, removeItem, incrementValue, decrementValue } =
  addToCartSlice.actions;
export default addToCartSlice.reducer;
