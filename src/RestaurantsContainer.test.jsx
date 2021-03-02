import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { getByRole } = render(
    (
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ),
  );

  expect(getByRole('link', { name: '마법사주방' })).toHaveAttribute('href', '/restaurants/1');
});
