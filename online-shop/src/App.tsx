import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import StandardTheme from './themes/StandardTheme';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={StandardTheme}>
        <ProductList />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
