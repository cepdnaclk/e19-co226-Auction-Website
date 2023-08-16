import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  return (
    <Container>
      <Header />
      <ProductList />
    </Container>
  );
};

export default App;
