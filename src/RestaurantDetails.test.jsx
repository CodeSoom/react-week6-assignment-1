import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetails from './RestaurantDetails';

test('RestaurantsDetails', () => {
  const { container } = render((
    <RestaurantDetails />
  ));

  expect(container).toHaveTextContent('주소');
  expect(container).toHaveTextContent('메뉴');
});
