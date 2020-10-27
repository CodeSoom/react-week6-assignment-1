import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const { container } = render((<RestaurantDetailPage />));

  expect(container).toHaveTextContent('Detail');
});
