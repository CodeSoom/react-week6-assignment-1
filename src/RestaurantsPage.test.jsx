import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import RestaurantsPage from './RestaurantsPage';

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantsPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  regions.forEach((region) => {
    expect(queryByText(region.name)).not.toBeNull();
  });

  categories.forEach((category) => {
    expect(queryByText(category.name)).not.toBeNull();
  });

  restaurants.forEach((restaurant) => {
    expect(queryByText(restaurant.name)).not.toBeNull();
  });
});
