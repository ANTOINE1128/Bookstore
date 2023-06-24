import React from 'react';
import FormSection from './form';
import Book from './books';
import '../styles/mainSection.css';

const BooksDisplay = () => (
  <div className="mainSection">
    <Book />
    <FormSection />
  </div>
);

export default BooksDisplay;
