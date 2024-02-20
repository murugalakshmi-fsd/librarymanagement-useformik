import React from 'react';
import '../css/AuthorList.css';

const AuthorList = ({ authors, onEditClick, onDeleteClick }) => {
  return (
    <div className="container mt-5">
      <h2>Author List</h2>
      <ul className="list-group">
        {authors.map(author => (
          <li key={author.id} className="list-group-item d-flex justify-content-between align-items-center">
            {author.name}
            <div>
              <button type="button" className="btn btn-primary mr-2" onClick={() => onEditClick(author)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(author.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
