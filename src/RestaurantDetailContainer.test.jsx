import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

test('RestaurantDetailContainer', () => {
  const restaurant = {
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
  };

  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantDetailContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('양천주가');
});
