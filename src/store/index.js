import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import i18n from './slices/i18n';
import auth from './slices/auth';
import cart from './slices/cart';
import favorites from './slices/favorites';

export const store = configureStore({
  reducer: {
    i18n: i18n,
    auth: auth,
    cart: cart,
    favorites: favorites
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

export const persistor = persistStore(store);
