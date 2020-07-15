import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구e',
      menuItems: [
        {
          id: 16,
          restaurantId: 1,
          name: '탕수육',
        },
      ],
      reviews: [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
      information: '양천주가 in 서울 강남구e',
    },
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent('양천주가');
});
