import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(queryByText('주소')).not.toBeNull();
  expect(queryByText('메뉴')).not.toBeNull();
});
