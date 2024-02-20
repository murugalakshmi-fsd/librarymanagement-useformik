import React from 'react';
import '../css/BookList.css'; 

const BookList = ({ books, onEditClick, onDeleteClick }) => {
  return (
    <div className="container mt-5">
      <h2>Book List</h2>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {book.title}
              <span className="badge badge-primary badge-pill ml-2">{book.isbn}</span>
            </div>
            <div>
              <button type="button" className="btn btn-info mr-2" onClick={() => onEditClick(book)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

