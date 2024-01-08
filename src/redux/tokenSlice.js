import { createSlice } from '@reduxjs/toolkit';
import { fetchToken } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  token: '',
  isLoading: false,
  error: null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchToken.pending, handlePending)
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(fetchToken.rejected, handleRejected);
  },
});

export const tokenReducer = tokenSlice.reducer;
