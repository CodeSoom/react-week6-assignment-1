import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  render((

    <MemoryRouter initialEntries={['/restaurants/1']}>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));
});
