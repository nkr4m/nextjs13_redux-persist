import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import userReducer from '../store/userSlice'
import counterReducer from '../store/counterSlice'
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { getDefaultMiddleware } from '@reduxjs/toolkit';



const persistConfig = {
  key: 'root',
  storage:storage,
}

const rootReducer = combineReducers({
  userReducer,
  counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: [thunk]
});



export const persistor = persistStore(store)