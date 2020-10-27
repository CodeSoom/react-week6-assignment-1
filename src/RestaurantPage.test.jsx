import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RESTAURANTS from '../fixtures/restaurants';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

test('RestaurantPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: RESTAURANTS,
  }));

  const match = { params: { restaurantId: '1' } };
  const { container } = render((
    <MemoryRouter>
      <RestaurantPage match={match} />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('김밥제국');
});
