import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  isLoading: false,
  wishListItems: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addItemToWishList: (state, action) => {
      const wishItem = state.wishListItems?.some(
        (item) => item.id === action.payload.id
      );
      if (wishItem) {
        toast('Already in wish list');
        return;
      } else {
        state.wishListItems.push(action.payload);
        toast.success('Added to wish list');
      }
    },
    removeItemFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },

  extraReducers: {},
});

export const { addItemToWishList, removeItemFromWishList } =
  wishListSlice.actions;
export default wishListSlice.reducer;
