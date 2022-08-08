import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

import App from './App';

test('App', () => {
  render((<App />));
});

describe('App', () => {
  it('home page', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/users/mjackson']}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/restaurants" element={<RestaurantsPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect
  });
});