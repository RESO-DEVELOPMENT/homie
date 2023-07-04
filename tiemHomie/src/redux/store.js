// src/store.js
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import dataReducer from './reducers/dataSlice';
import checkoutReducer from './reducers/checkoutSlice';
import thunkMiddleware from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'checkout'],
}

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
}

) 

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer 
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // Ignore these field paths in all actions
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        // ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);