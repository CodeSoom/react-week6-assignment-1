import React from 'react';

import { useNavigate, MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  const navigate = jest.fn();

  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];
  const KIMBAB = RESTAURANTS[0];

  beforeEach(() => {
    useNavigate.mockImplementation(() => navigate);

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

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('loads initial data from API', () => {
    renderRestaurantsPage();

    expect(dispatch).toBeCalled();
  });

  it('renders regions & categories & restaurants', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(queryByText(SEOUL.name)).not.toBeNull();
    expect(queryByText(KOREAN_FOOD.name)).not.toBeNull();
    expect(queryByText(KIMBAB.name)).not.toBeNull();
  });

  it('renders links to listent to click event', () => {
    const { getAllByRole } = renderRestaurantsPage();

    const restaurantLinks = getAllByRole('link');

    fireEvent.click(restaurantLinks[0]);

    expect(navigate).toBeCalled();
  });
});
