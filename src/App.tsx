import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className='App'>
      <h1>Commercetools Products</h1>
      <ProductsList />
    </div>
  );
}

export default App;
