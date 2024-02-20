import React, { useState } from 'react';
import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';

const AuthorManagement = () => {
  // State to manage authors list, edit mode, and selected author
  const [authors, setAuthors] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // Function to handle adding a new author
  const handleAddAuthor = (newAuthor) => {
    setAuthors([...authors, newAuthor]);
  };

  // Function to handle editing an existing author
  const handleEditAuthor = (editedAuthor) => {
    const updatedAuthors = authors.map((author) =>
      author.id === editedAuthor.id ? editedAuthor : author
    );
    setAuthors(updatedAuthors);
    setEditMode(false);
    setSelectedAuthor(null);
  };

  // Function to handle deleting an author
  const handleDeleteAuthor = (authorId) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorId);
    setAuthors(updatedAuthors);
  };

  // Function to handle clicking the edit button for an author
  const handleEditClick = (author) => {
    setEditMode(true);
    console.log(author)
    setSelectedAuthor(author);
  };

  // Function to handle cancelling the edit mode
  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedAuthor(null);
  };

  return (
    <div>
      <h1>Author Management</h1>
      {/* Conditional rendering based on edit mode */}
      {editMode ? (
        <div>
          <h2>Edit Author</h2>
          {/* AuthorForm component for editing */}
          <AuthorForm initialValues={selectedAuthor} onSubmit={handleEditAuthor} onCancel={handleCancelEdit} />
        </div>
      ) : (
        <div>
          <h2>Add Author</h2>
          {/* AuthorForm component for adding */}
          <AuthorForm onSubmit={handleAddAuthor} />
        </div>
      )}
      <hr />
      <h2>Authors</h2>
      {/* AuthorList component for displaying authors */}
      <AuthorList authors={authors} onEditClick={handleEditClick} onDeleteClick={handleDeleteAuthor} />
    </div>
  );
};

export default AuthorManagement;
