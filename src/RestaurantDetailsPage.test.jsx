import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

test('RestaurantDetailsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  render((
    <MemoryRouter>
      <RestaurantDetailsPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
