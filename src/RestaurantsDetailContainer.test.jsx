import React from 'react';

import { render } from '@testing-library/react';
import RestaurantsDetailContainer from './RestaurantsDetailContainer';

test('Restaurants Detail', () => {
  const { container } = render((
    <RestaurantsDetailContainer />
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('주소');
  expect(container).toHaveTextContent('메뉴');
  expect(container).toHaveTextContent('탕수육');
});
