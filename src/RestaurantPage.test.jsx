import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {},
  }));

  render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
