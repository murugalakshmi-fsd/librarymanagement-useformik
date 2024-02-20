import React from 'react';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Components/Home';
import AuthorManagement from './Components/AuthorManagement';
import BookManagement from './Components/BookManagement';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
     <Home></Home>
      <Routes>
          <Route path="/" element={<BookManagement/>}></Route>
          <Route path="/authors" element={<AuthorManagement/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
