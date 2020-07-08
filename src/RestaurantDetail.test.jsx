import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

test('RestaurantDetail', () => {
  const { container } = render((
    <RestaurantDetail />
  ));

  expect(container).toHaveTextContent('메뉴');
});
