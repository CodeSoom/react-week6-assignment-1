import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import RESTAURANTINFORMATION from '../fixtures/restaurantInformation';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  beforeEach(() => {
    mockFetch(RESTAURANTINFORMATION);
  });

  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(queryByText('주소')).not.toBeNull();
  expect(queryByText('메뉴')).not.toBeNull();
});
