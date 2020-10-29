import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDatail';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantDetail', () => {
  const { container } = render((
    <RestaurantDetail restaurant={RESTAURANT} />
  ));

  expect(container).toHaveTextContent(RESTAURANT.name);
  expect(container).toHaveTextContent(RESTAURANT.address);

  RESTAURANT.menuItems.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
