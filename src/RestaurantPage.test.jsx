import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent(RESTAURANT.name);
  expect(container).toHaveTextContent(RESTAURANT.address);
});
