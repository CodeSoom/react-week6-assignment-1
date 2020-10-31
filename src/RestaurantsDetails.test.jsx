import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsDetails from './RestaurantsDetails';

test('RestaurantsDetails', () => {
  const { container } = render((
    <RestaurantsDetails />
  ));

  expect(container).toHaveTextContent('주소');
  expect(container).toHaveTextContent('메뉴');
});
