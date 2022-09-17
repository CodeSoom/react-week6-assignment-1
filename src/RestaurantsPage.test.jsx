import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];
  const KIMBAB = RESTAURANTS[0];

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads initial data from API', () => {
    render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();
  });

  it('renders regions & categories & restaurants', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(queryByText(SEOUL.name)).not.toBeNull();
    expect(queryByText(KOREAN_FOOD.name)).not.toBeNull();
    expect(queryByText(KIMBAB.name)).not.toBeNull();
  });
});
