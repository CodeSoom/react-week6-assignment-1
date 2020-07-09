import React from 'react';

import { render, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  render((
    <RestaurantsContainer />
  ));

  expect(screen.getByRole('link', { name: '마법사주방' })).toBeInTheDocument();
});
