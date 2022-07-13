import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { loadInitialData } from '../actions';

import RESTAURANTS from '../../fixtures/restaurants';
import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('../actions');

describe('<RestaurantsPage />', () => {
  given('regions', () => []);
  given('categories', () => []);
  given('restaurants', () => []);

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
    categories: given.categories,
    restaurants: given.restaurants,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderRestaurantsPage = () => render(<RestaurantsPage />);

  it('dispatch loadInitialData', () => {
    renderRestaurantsPage();

    expect(dispatch).toBeCalled();
    expect(loadInitialData).toBeCalled();
  });

  context('with regions', () => {
    given('regions', () => REGIONS);

    it('renders regions', () => {
      const { container } = renderRestaurantsPage();

      REGIONS.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });
  });

  context('with categories', () => {
    given('categories', () => CATEGORIES);

    it('renders categories', () => {
      const { container } = renderRestaurantsPage();

      CATEGORIES.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });
  });

  context('with restaurants', () => {
    given('restaurants', () => RESTAURANTS);

    it('renders restaurants', () => {
      const { container } = renderRestaurantsPage();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
      });
    });
  });
});
