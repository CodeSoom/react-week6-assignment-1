import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { loadInitialData } from '../actions';

import RESTAURANTS from '../../fixtures/restaurants';
import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('../actions');

describe('<RestaurantsPage />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderRestaurantsPage = () => render(<RestaurantsPage />);

  it('dispatch loadInitialData', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));

    renderRestaurantsPage();

    expect(dispatch).toBeCalled();
    expect(loadInitialData).toBeCalled();
  });

  context('with regions', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
        categories: [],
        restaurants: [],
      }));
    });

    it('renders regions', () => {
      const { container } = renderRestaurantsPage();

      REGIONS.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });
  });

  context('with categories', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: CATEGORIES,
        restaurants: [],
      }));
    });

    it('renders categories', () => {
      const { container } = renderRestaurantsPage();

      CATEGORIES.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });
  });

  context('with restaurants', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants: RESTAURANTS,
      }));
    });

    it('renders restaurants', () => {
      const { container } = renderRestaurantsPage();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
      });
    });
  });
});
