import { createSlice } from '@reduxjs/toolkit';
import { fetchPositions } from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  positions: [],
  isLoading: false,
  error: null,
};

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPositions.pending, handlePending)
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.positions = action.payload.positions;
      })
      .addCase(fetchPositions.rejected, handleRejected);
  },
});

export const positionsReducer = positionsSlice.reducer;
