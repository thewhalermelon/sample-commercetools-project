import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import SampleList from './pages/SampleList';
import ProductsList from './components/ProductList';
import CardDetail from './pages/CardDetail';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path='/sampleList' element={<SampleList />} />
          <Route path='/productList' element={<ProductsList />} />
          <Route path='/cardDetail/:id' element={<CardDetail />} />
          {/* <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
