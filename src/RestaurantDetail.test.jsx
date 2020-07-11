import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../fixtures/restaurantDetail';

test('RestaurantDetail', () => {
  const { container } = render(
    <RestaurantDetail
      restaurantDetail={restaurantDetail}
    />,
  );

  const { name, address, menuItems } = restaurantDetail;

  expect(container).toHaveTextContent(name);
  expect(container).toHaveTextContent(address);
  menuItems.forEach((menu) => {
    expect(container).toHaveTextContent(menu.name);
  });
});
