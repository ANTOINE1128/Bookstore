import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push(action.payload);
    },

    RemoveBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id === bookId);
    },
  },

});

export default bookSlice.reducer;
export const { AddBook, RemoveBook } = bookSlice.actions;
