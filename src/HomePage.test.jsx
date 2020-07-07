import React from 'react';

import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
});
