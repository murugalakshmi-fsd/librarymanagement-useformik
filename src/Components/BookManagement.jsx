import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import '../css/BookManagement.css';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleEditBook = (editedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === editedBook.id ? editedBook : book
    );
    setBooks(updatedBooks);
    setEditMode(false);
    setSelectedBook(null);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleEditClick = (book) => {
    setEditMode(true);
    setSelectedBook(book);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedBook(null);
  };

  return (
    <div className='container-fluid'>
      <h1>Book Management</h1>
      {editMode ? (
        <div>
          <h2>Edit Book</h2>
          <BookForm initialValues={selectedBook} onSubmit={handleEditBook} />
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Add Book</h2>
          <BookForm onSubmit={handleAddBook} />
        </div>
      )}
      <hr />
      <h2>Books</h2>
      <BookList
        books={books}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteBook}
      />
    </div>
  );
};

export default BookManagement;
