'use client'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExampleData = createAsyncThunk(
  'example/fetchExampleData',
  async (param, thunkAPI) => {
    const response = await fetch('/api/example-endpointxx');
    const data = await response.json();
    return data;
  }
);
