// redux/slices/dataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setData } = productSlice.actions;
export default productSlice.reducer;
