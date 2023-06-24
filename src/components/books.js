import React, { useEffect } from 'react';
import '../styles/general.css';
import '../styles/bookInstance.css';
import '../styles/loading.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, deleteBooks } from '../redux/books/bookSlice';
import OtherInfoSection from './bookSupport';

const Book = () => {
  const allBooks = useSelector((state) => state.books.books);
  const loadingState = useSelector((state) => state.books.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  const handleDeleteClick = (itemID) => {
    dispatch(deleteBooks(itemID));
  };

  const handleButtonClick = (itemID) => {
    handleDeleteClick(itemID);
  };

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  if (allBooks.length === 0) {
    return (
      <div className="noBooks-Message">
        <h1>No books have been added yet!</h1>
      </div>
    );
  }

  if (loadingState) {
    return (
      <section className="loadingState">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>
    );
  }

  return (
    <section className="booksHolder">
      {allBooks.map((book) => (
        <div className="SinglebookArrange" key={book.item_id}>
          <section className="bookImfo">
            <span>{book.category}</span>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button type="submit">Comments</button>
            <button type="submit" data-index={book.item_id} onClick={() => handleButtonClick(book.item_id)}>Remove</button>
            <button type="submit">Edit</button>
          </section>
          <OtherInfoSection book={book} />
        </div>
      ))}
    </section>
  );
};

export default Book;
