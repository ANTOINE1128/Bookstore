import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove({ id }));
  };

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default BookList;
