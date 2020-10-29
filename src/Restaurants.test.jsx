import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const { container } = render(
    <Restaurants />,
  );

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('마법사주방');
});
