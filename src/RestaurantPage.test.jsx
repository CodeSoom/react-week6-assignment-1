import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  const { container } = render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('김밥제국');
});
