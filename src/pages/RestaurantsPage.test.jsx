import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('<RestaurantsPage />', () => {
  const renderRestaurantsPage = () => render(<RestaurantsPage />);

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
