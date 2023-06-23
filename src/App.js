import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import BooksDisplay from './components/booksDisplay';
import Categories from './components/categories';

function App() {
  return (
    <div className="wholeApp">
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksDisplay />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<BooksDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
