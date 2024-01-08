import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, fetchNewContacts } from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  totalPages: 0,
  totalUsers: 0,
  page: 1,
  links: {
    next_url: null,
    prev_url: null,
  },
  send_result: {},
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload && action.payload.users) {
          const uniqueUsers = action.payload.users.filter(newUser => {
            return !state.items.some(
              existingUser => existingUser.id === newUser.id
            );
          });
          state.items = [...state.items, ...uniqueUsers];

          state.totalPages = action.payload.total_pages;
          state.totalUsers = action.payload.total_users;
          state.page = action.payload.page;
          state.links = action.payload.links;
        }
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.send_result = action.payload;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(fetchNewContacts.pending, handlePending)
      .addCase(fetchNewContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.users;
        state.totalPages = action.payload.total_pages;
        state.totalUsers = action.payload.total_users;
        state.page = action.payload.page;
        state.links = action.payload.links;
      })
      .addCase(fetchNewContacts.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
