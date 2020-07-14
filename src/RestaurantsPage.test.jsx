import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('./services/api');

test('RestaurantsPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  render((
    <RestaurantsPage />
  ));

  expect(dispatch).toBeCalledTimes(1);
});
