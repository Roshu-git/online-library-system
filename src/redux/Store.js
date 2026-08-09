// Configure Redux store for global state management

import { configureStore } from '@reduxjs/toolkit'; 
import booksReducer from './booksSlice'; 

export const store = configureStore({ 
    reducer: { books: booksReducer, 
    }, 
});