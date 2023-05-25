import { createSlice } from '@reduxjs/toolkit';

const settingsModalSlice = createSlice({
  name: 'settings',
  initialState: {
    showModal: false,
    modalComponent: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.showModal = true;
      state.modalComponent = action.payload;
    },
    closeModal: (state) => {
      state.showModal = false;
      state.modalComponent = null;
    },
  },
});

export const { openModal, closeModal } = settingsModalSlice.actions;

export default settingsModalSlice.reducer;
