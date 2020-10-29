import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    { id: 1, name: '양천주가' },
    { id: 2, name: '마법사주방' },
  ];

  const renderRestaurants = () => render(
    <Restaurants restaurants={restaurants} />,
  );

  it('render restaurants', () => {
    const { container } = renderRestaurants();

    restaurants.forEach((restaurant) => {
      expect(container).toHaveTextContent(restaurant.name);
    });
  });
});
