import { configureStore } from '@reduxjs/toolkit';
import settingsModalReducer from './settingsModal/settingsModal';
import paymentModalReducer from './settingsModal/paymentModalSlice';
const store = configureStore({
  reducer: {
    settings: settingsModalReducer,
    paymentModal: paymentModalReducer,
  },
  // Diğer store yapılandırma seçenekleri (middleware vb.) buraya eklenebilir
});

export default store;
