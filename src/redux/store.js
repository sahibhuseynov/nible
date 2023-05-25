import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {api} from '../api/api'
import settingsModalReducer from '../redux/slice/settingsModal/settingsModal';
import paymentModalReducer from '../redux/slice/settingsModal/paymentModalSlice';
import productReducer from '../redux/slice/productSlice';
import productModalReducer  from '../redux/slice/productModal';
import favoriteReducer from '../redux/slice/favoritesSlice';
const store = configureStore({
  reducer: {
    settings: settingsModalReducer,
    paymentModal: paymentModalReducer,
    products: productReducer,
    productModal: productModalReducer,
    favorites: favoriteReducer,
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  // Diğer store yapılandırma seçenekleri (middleware vb.) buraya eklenebilir
});
setupListeners(store.dispatch);

export default store;
