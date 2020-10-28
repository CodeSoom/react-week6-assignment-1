import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}
