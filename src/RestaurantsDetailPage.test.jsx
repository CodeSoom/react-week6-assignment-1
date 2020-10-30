import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsDetailPage from './RestaurantsDetailPage';

test('RestaurantsDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: null,
      name: null,
      address: null,
      menuItems: [],
    },
  }));

  render((
    <MemoryRouter>
      <RestaurantsDetailPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
