import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  loading: false,
  error: '',
  message: '',
};

const axiosInstance = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
  headers: {
    'Content-Type': 'application/json',
  },
});

const GetAppId = async () => {
  const appID = localStorage.getItem('appID');
  if (!appID) {
    const response = await axiosInstance.post('/apps/');
    localStorage.setItem('appID', response.data);
    return response.data;
  }
  return appID;
};

export const fetchData = createAsyncThunk(
  'books/fetchData',
  async () => {
    const appID = await GetAppId();
    const request = await axiosInstance.get(`/apps/${appID}/books`);
    const response = await request.data;
    return response;
  },
);

const processBooksData = (dataObject) => {
  const bookArrays = Object.values(dataObject);
  const allBooksArray = bookArrays.flat().map((book, index) => ({
    ...book,
    item_id: index,
  }));
  return allBooksArray;
};

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async (newBook) => {
    const appID = await GetAppId();
    const request = await axiosInstance.post(`/apps/${appID}/books`, newBook);
    const response = await request.data;
    return response;
  },
);

export const deleteBooks = createAsyncThunk(
  'books/deleteBooks',
  async (itemID, { dispatch }) => {
    try {
      const appID = await GetAppId();
      const request = await axiosInstance.delete(`/apps/${appID}/books/${itemID}`);
      const responce = request.data;
      await dispatch(fetchData());
      return responce;
    } catch (error) {
      return error;
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.message = 'books are loading...';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.books = processBooksData((action.payload));
      state.error = '';
      state.message = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
      state.message = '';
    });
    builder.addCase(addBooks.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(deleteBooks.fulfilled, (state, action) => {
      state.message = `you clicked this button ${action.payload}`;
    });
  },
});

export default bookSlice.reducer;
