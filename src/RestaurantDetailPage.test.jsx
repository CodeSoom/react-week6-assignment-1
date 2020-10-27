import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';
import RESTAURANT_DETAIL from '../fixtures/restaurantDetail';

test('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selectedRestaurant: RESTAURANT_DETAIL,
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent(RESTAURANT_DETAIL.name);
});
