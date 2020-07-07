import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));
jest.mock('react-redux');

test('RestaurantPage', () => {
  const restaurantId = 1;
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useParams.mockImplementation(() => ({ restaurantId }));
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  render((
    <RestaurantDetailPage />
  ));

  expect(dispatch).toBeCalled();
});
