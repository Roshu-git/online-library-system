// Redux slice for managing the library books list

import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,

  // Add a new book to the library
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
