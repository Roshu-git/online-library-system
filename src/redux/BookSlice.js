import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,

  reducers: {
    addBook: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload,
      });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});