import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailPage from './RestaurantsDetailPage';

import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantsDetailPage', () => {
  const FIRST_RESTAURANTS = RESTAURANTS[0];

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedRestaurant: FIRST_RESTAURANTS,
      }));
    });

    it('renders details of restaurant', () => {
      const { container, getByText } = render((
        <RestaurantsDetailPage />
      ));

      expect(getByText(FIRST_RESTAURANTS.name)).not.toBeNull();
      expect(getByText(FIRST_RESTAURANTS.address)).not.toBeNull();
      expect(container).toHaveTextContent(FIRST_RESTAURANTS.menuItems[0].name);
      expect(container).toHaveTextContent(FIRST_RESTAURANTS.menuItems[1].name);
    });
  });
});
