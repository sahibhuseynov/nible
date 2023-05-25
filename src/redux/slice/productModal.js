
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItemId: null,
  isOpen: false,
};

const productModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.selectedItemId = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.selectedItemId = null;
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = productModalSlice.actions;
export default productModalSlice.reducer;
