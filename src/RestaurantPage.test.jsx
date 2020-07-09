import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
      menuItems: [
        {
          id: 16,
          restaurantId: 1,
          name: '탕수육',
        },
        {
          id: 17,
          restaurantId: 1,
          name: '팔보채',
        },
      ],
    },
  }));

  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('서울 강남구')).not.toBeNull();
  expect(queryByText('탕수육')).not.toBeNull();
  expect(queryByText('팔보채')).not.toBeNull();
});
