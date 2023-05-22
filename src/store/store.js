import { configureStore } from '@reduxjs/toolkit';
import settingsModalReducer from './settingsModal/settingsModal';
const store = configureStore({
  reducer: {
    settings: settingsModalReducer,
  },
  // Diğer store yapılandırma seçenekleri (middleware vb.) buraya eklenebilir
});

export default store;
