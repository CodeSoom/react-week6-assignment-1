import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

function renderRestaurantDetailPage() {
  return render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));
}

test('RestaurantDetailPage', () => {
  renderRestaurantDetailPage();
});
