import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'book',
  initialState: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

export const { addBook, remove } = booksSlice.actions;
export default booksSlice.reducer;
