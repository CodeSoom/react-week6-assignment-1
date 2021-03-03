import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsMenusContainer from './RestaurantsMenusContainer';

test('RestaurantsMenusContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '비빔밥',
        },
      ],
    },
  }));

  const { queryByText } = render((
    <RestaurantsMenusContainer />
  ));

  expect(queryByText('비빔밥')).not.toBeNull();
});
