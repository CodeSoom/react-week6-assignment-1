import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from './actions';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');
jest.mock('react-router-dom');

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useParams.mockImplementation(() => ({
    restaurantId: 1,
  }));

  render((
    <RestaurantPage />
  ));

  expect(dispatch).toBeCalledWith(loadRestaurant(1));
});
