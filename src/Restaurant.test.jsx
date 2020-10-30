import React from 'react';

import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const renderRestaurant = () => render(
    <Restaurant restaurant={restaurant} />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
