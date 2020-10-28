import React from 'react';

import { render } from '@testing-library/react';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantDetail from './RestaurantDetail';

test('RestaurantDetail', () => {
  const { container } = render((
    <RestaurantDetail restaurant={RESTAURANT} />
  ));

  expect(container).toHaveTextContent(RESTAURANT.name);
  expect(container).toHaveTextContent(RESTAURANT.address);

  RESTAURANT.menuItems.forEach((menuItem) => {
    expect(container).toHaveTextContent(menuItem.name);
  });
});
