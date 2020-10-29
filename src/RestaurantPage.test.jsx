import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {},
  }));

  const match = { params: { restaurantId: 1 } };

  render((
    <MemoryRouter>
      <RestaurantPage match={match} />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
