import { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Book = () => {
  const [Books, setBooks] = useState([
    {
      title: 'Hunger Games',
      category: 'Action',
      id: 1,
      author: 'John',
    },
    {
      title: 'Lord of the Rings',
      category: 'Action',
      id: 2,
      author: 'Tony',
    },
    {
      title: 'Bad Games',
      category: 'Romance',
      id: 3,
      author: 'Oliver',
    },
  ]);

  const [inputFields, setInputFields] = useState([{ title: '', author: '' }]);

  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: inputFields[0].title,
      author: inputFields[0].author,

      id: Books.length + 1, // Generate a unique ID
    };
    setBooks([...Books, newBook]);
    setInputFields([{ title: '', author: '' }]); // Reset input fields
  };

  const handleDelete = (id) => {
    const updatedBooks = Books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (

    <div className="book">
      <BookList Books={Books} title="Books" handleDelete={handleDelete} />
      <BookForm
        inputFields={inputFields}
        handleFormChange={handleFormChange}
        addBook={addBook}
      />
    </div>
  );
};

export default Book;
