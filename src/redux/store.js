import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './getSlice';
import { tokenReducer } from './tokenSlice';
import { positionsReducer } from './positionsSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    token: tokenReducer,
    positions: positionsReducer,
    // filter: filterReducer,
  },
});
