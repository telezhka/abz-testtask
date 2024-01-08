import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/getSlice';
import { tokenReducer } from './slices/tokenSlice';
import { positionsReducer } from './slices/positionsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    token: tokenReducer,
    positions: positionsReducer,
  },
});
