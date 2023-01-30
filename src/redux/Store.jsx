import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth-slice/auth-slice'
import storage from 'redux-persist/lib/storage'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsApi/contacts-slice/contacts-slice';

const persistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(persistConfig, authReducer),
      contacts: contactsReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
