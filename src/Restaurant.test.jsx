import React from 'react';

import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const renderRestaurant = (restaurantInfo = '') => render(
    <Restaurant restaurant={restaurantInfo} />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurant(restaurant);

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });

  context('without restaurant props', () => {
    it('does not render restaurant', () => {
      const { container } = renderRestaurant();

      expect(container).not.toHaveTextContent(restaurant.name);
      expect(container).not.toHaveTextContent(restaurant.address);

      restaurant.menuItems.forEach((menu) => {
        expect(container).not.toHaveTextContent(menu.name);
      });
    });
  });
});
