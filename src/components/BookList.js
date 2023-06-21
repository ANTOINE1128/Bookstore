import PropTypes from 'prop-types';

const BookList = ({ Books, title }) => (
  <div className="book-list">
    <h1>{title}</h1>
    {Books.map((book) => (
      <div className="book-preview" key={book.id}>
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="delete">
          <button type="button">
            Delete Book
          </button>
        </div>
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  Books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default BookList;
