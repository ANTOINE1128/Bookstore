import PropTypes from 'prop-types';

const BookForm = ({ inputFields, handleFormChange, addBook }) => (
  <div className="book-form">
    <form onSubmit={addBook}>
      {inputFields.map((input, index) => (
        <div key={`input-${input.id}`}>
          <input
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={(event) => handleFormChange(index, event)}
            required
          />
          <input
            name="author"
            placeholder="Author"
            value={input.author}
            onChange={(event) => handleFormChange(index, event)}
            required
          />
        </div>
      ))}
      <button type="submit">Add Book</button>
    </form>
  </div>
);

BookForm.propTypes = {
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleFormChange: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
