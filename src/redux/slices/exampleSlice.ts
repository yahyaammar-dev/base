'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchExampleData } from '../actions/exampleActions';

interface ExampleState {
  value: number;
  data: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ExampleState = {
  value: 0,
  data: null,
  status: 'idle',
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExampleData.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
