import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANTS from '../fixtures/restaurants';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

test('RestaurantContainer', () => {
  const restaurantId = 1;

  useSelector.mockImplementation((selector) => selector({
    restaurants: RESTAURANTS,
  }));

  const { container } = render((
    <RestaurantContainer restaurantId={restaurantId} />
  ));

  expect(container).toHaveTextContent('서울시 강남구');
});
