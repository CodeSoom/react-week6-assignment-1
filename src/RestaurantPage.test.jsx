import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');
jest.mock('./services/api');

test('RestaurantPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: {},
  }));

  render((
    <RestaurantPage />
  ));

  expect(dispatch).toBeCalledTimes(1);
});
