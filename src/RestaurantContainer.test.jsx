import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  function mockUseSelector(restaurant) {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  }

  function renderRestaurantPage() {
    return render((
      <RestaurantContainer />
    ));
  }

  context('with restaurant', () => {
    const restaurant = RESTAURANT;

    it('renders RestaurantDetail', () => {
      mockUseSelector(restaurant);

      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent(RESTAURANT.name);

      RESTAURANT.menuItems.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('without restaurant', () => {
    const restaurant = {};

    it('renders Loading', () => {
      mockUseSelector(restaurant);

      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('loading ...');
    });
  });
});
