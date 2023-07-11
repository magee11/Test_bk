import { createSlice } from "@reduxjs/toolkit";
const initialStateCount = { cartItem: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCount,
  reducers: {
    increment: (state) => {
      console.log("this is hitting Increment");
      state.cartItem += 1;
    },
    decrement: (state) => {
      console.log("this is hitting Decrement");
      if (state.cartItem > 0) {
        state.cartItem -= 1;
      } else {
        state.cartItem = 0;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
