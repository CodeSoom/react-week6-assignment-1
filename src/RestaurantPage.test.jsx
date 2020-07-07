import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  const { container } = render(<RestaurantPage />);

  expect(container).toHaveTextContent('Restaurant');
});
