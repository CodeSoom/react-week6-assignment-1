import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

test('RestaurantDetailsPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetails: {
      id: 1,
      name: '양천주가',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, name: '탕수육' },
      ],
    },
  }));

  render((
    <MemoryRouter>
      <RestaurantDetailsPage />
    </MemoryRouter>
  ));
});
