import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantViewPage from './RestaurantViewPage';

import RESTAURANT from '../../fixtures/restaurant';

test('RestaurantViewPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { queryByText } = render((
    <RestaurantViewPage />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText(RESTAURANT.name)).not.toBeNull();
  expect(queryByText(RESTAURANT.address)).not.toBeNull();
});
