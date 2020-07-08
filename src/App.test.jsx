import React from 'react';

import { render } from '@testing-library/react';

import App from './App';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));
});