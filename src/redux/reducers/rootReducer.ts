'use client'
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from '../slices/exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
