// settingsModalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPayment: null,
};

const paymentModalSlice = createSlice({
  name: 'paymentModal',
  initialState,
  reducers: {
    setSelectedPayment(state, action) {
      state.selectedPayment = action.payload;
    },
  },
});

export const { setSelectedPayment } = paymentModalSlice.actions;

export default paymentModalSlice.reducer;
