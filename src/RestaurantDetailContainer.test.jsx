import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

test('RestaurantDetailContainer', () => {
  const { container } = render((
    <RestaurantDetailContainer />
  ));

  expect(container).toHaveTextContent('Restaurant Detail Container');
});