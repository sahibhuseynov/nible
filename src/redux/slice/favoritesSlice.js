
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const productId = action.payload;
      if (!state.includes(productId)) {
        state.push(productId);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      const index = state.indexOf(productId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
