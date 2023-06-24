import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addBooks } from '../redux/books/bookSlice';
import '../styles/general.css';
import '../styles/form.css';

const FormSection = () => {
  const [title, SetTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [emptyFields, setEmptyFields] = useState(false);
  const [errorMssg, seterrorMssg] = useState('');
  const allBooks = useSelector((state) => state.books.books);
  const bookLength = allBooks.length;

  const handleTitleChange = (event) => {
    SetTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleAfterClick = () => {
    setAuthor('');
    SetTitle('');
  };

  const dispatch = useDispatch();

  const handleAddClick = async (newBook) => {
    if (title === '' || author === '') {
      setEmptyFields(true);
      return;
    }

    const updatedBook = { ...newBook, item_id: bookLength }; // Add item_id to the book object

    try {
      await dispatch(addBooks(updatedBook)).unwrap();
      dispatch(fetchData()); // Fetch updated data
      setAuthor('');
      SetTitle('');
      setEmptyFields(false);
    } catch (error) {
      seterrorMssg(error.message);
    }
  };

  return (
    <>
      <div className="separatorHorizontal" />
      <section className="formSection">
        <span className="formHeader">ADD NEW BOOK</span>
        <form>
          <input type="text" required placeholder="enter a new book" value={title} onChange={handleTitleChange} />
          <input type="text" required placeholder="enter the author" value={author} onChange={handleAuthorChange} />
          <button
            type="button"
            onClick={() => {
              const madeBook = {
                item_id: bookLength,
                title,
                author,
                category: 'fiction',
              };
              handleAddClick(madeBook);
              handleAfterClick();
            }}
          >
            ADD BUTTON
          </button>
        </form>
        {emptyFields && <span>please fill in all the fields!</span>}
        {errorMssg && <span>an error occured!</span>}
      </section>
    </>
  );
};

export default FormSection;
