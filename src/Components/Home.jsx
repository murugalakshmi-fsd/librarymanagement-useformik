import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
const Home = () => {
  return (
 <div className="container">
         <h1 className="mt-5 mb-4">Welcome to Library Management System</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Manage Books</Link>
        </li>
        <li className="list-group-item">
          <Link to="/authors">Manage Authors</Link>
        </li>
      </ul>
    </div>

  );
};

export default Home;
