import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

function renderRestaurant() {
  return render((
    <RestaurantContainer />
  ));
}

describe('RestaurantContainer', () => {
  context('with a restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));
    });

    it('render the information of restaurant', () => {
      const { container } = renderRestaurant();

      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);

      const menuList = RESTAURANT.menuItems;
      menuList.forEach((menu) => {
        expect(container).toHaveTextContent(menu.name);
      });
    });
  });

  context('without a restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: [],
      }));
    });

    it('renders a loading message', () => {
      const { container } = renderRestaurant();

      expect(container).toHaveTextContent('Loading');
    });
  });
});
