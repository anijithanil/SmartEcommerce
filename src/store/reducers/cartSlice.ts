import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // addItemToCart

    addItemToCart: (state, action) => {
      const isItemExist = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (isItemExist) {
        isItemExist.qty += 1,
        isItemExist.sum += action.payload.price
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    // removeUtemFromCart

    // removeProductFromCart

    // emptyCart
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
