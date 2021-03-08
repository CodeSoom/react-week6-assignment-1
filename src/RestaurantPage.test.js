import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantPage from './RestaurantPage';


jest.mock('react-redux');
jest.mock('./services/api');

test('RestaurantPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <RestaurantPage />
  ));
  expect(container).toHaveTextContent(RESTAURANT.name);
  expect(container).toHaveTextContent(RESTAURANT.address);
  expect(container).toHaveTextContent(RESTAURANT.menuItems[0].name);
});
