import React from 'react';
import logo from './logo.svg';
import AppLayout from './layout/AppLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
