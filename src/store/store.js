import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {api} from '../api/api'
import settingsModalReducer from './settingsModal/settingsModal';
import paymentModalReducer from './settingsModal/paymentModalSlice';
const store = configureStore({
  reducer: {
    settings: settingsModalReducer,
    paymentModal: paymentModalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  // Diğer store yapılandırma seçenekleri (middleware vb.) buraya eklenebilir
});
setupListeners(store.dispatch);

export default store;
