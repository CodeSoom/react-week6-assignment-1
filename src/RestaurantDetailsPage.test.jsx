import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

import DETAILS from '../fixtures/details';

test('RestaurantDetailsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantDetails: DETAILS,
  }));

  render((
    <MemoryRouter>
      <RestaurantDetailsPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
