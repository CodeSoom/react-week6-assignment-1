import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [
      { id: 1, name: '양천주가', address: '서울시 강남구', menuItem: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
        ]
      },
    ],
  }));

  const match = {
    params: {
      restaurantId: 1,
    },
  };

  const { queryByText } = render((
    <RestaurantDetailPage match={match} />
  ));

  expect(queryByText('서울시 강남구')).not.toBeNull();
  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('비빔밥')).not.toBeNull();
});
