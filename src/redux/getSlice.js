import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  // addContact, deleteContact
} from './operations';

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
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log(action.payload);
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
      .addCase(fetchContacts.rejected, handleRejected);
    //   .addCase(addTask.pending, handlePending)
    //   .addCase(addTask.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addTask.rejected, handleRejected)
    //   .addCase(deleteTask.pending, handlePending)
    //   .addCase(deleteTask.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       task => task.id === action.payload.id
    //     );
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deleteTask.rejected, handleRejected)
    //   .addCase(toggleCompleted.pending, handlePending)
    //   .addCase(toggleCompleted.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       task => task.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   })
    //   .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
