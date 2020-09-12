import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurant from '../fixtures/restaurant';

jest.mock('react-redux');

test('RestaurantPage', () => {
  const restaurantId = 1;
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  render((
    <RestaurantDetailPage params={restaurantId} />
  ));

  expect(dispatch).toBeCalled();
});
