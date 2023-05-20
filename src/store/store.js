import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
  // Diğer store yapılandırma seçenekleri (middleware vb.) buraya eklenebilir
});

export default store;
