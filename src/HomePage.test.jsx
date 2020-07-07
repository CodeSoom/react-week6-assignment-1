import React from 'react';

import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  render((
    <HomePage />
  ));

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
});
