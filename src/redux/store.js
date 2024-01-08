import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './getSlice';
import { tokenReducer } from './tokenSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    token: tokenReducer,
    // filter: filterReducer,
  },
});
