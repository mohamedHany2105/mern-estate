import { configureStore } from '@reduxjs/toolkit'
import reducer from './user/userSlice';
import  useReducer  from './user/userSlice.js';

export const store = configureStore({
  reducer: {user:useReducer},
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),
});