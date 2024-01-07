import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './getSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
  },
});
