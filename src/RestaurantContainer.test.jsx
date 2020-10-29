import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent(RESTAURANT.name);
});
