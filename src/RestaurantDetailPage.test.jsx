import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import RESTAURANDETAIL from '../fixtures/restaurantDetail';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-redux');

test('RestaurantDetailPage', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  beforeEach(() => {
    mockFetch(RESTAURANDETAIL);
  });

  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(queryByText(/주소/)).not.toBeNull();
  expect(queryByText('메뉴')).not.toBeNull();
});
