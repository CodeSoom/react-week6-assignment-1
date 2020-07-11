import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsDetailPage from './RestaurantsDetailPage';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsDetailPage', () => {
  const firstRestaurants = restaurants[0];

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedRestaurant: firstRestaurants,
      }));
    });

    it('renders details of restaurant', () => {
      const { container, getByText } = render((
        <RestaurantsDetailPage />
      ));

      expect(getByText(firstRestaurants.name)).not.toBeNull();
      expect(getByText(firstRestaurants.address)).not.toBeNull();
      expect(container).toHaveTextContent(firstRestaurants.menuItems[0].name);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[1].name);
    });
  });
});
