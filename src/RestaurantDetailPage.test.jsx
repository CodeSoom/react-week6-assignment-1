import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: {
      name: '김초밥',
      address: '서울시 간남구 역삼동',
      menuItems: [
        {
          id: 20,
          restaurantId: 14,
          name: '떡볶이',
        },
        {
          id: 21,
          restaurantId: 14,
          name: '순대',
        },
      ],
      reviews: [
        {
          id: 157,
          restaurantId: 14,
          name: '테스터',
          score: 1,
          description: '가지말자',
        },
        {
          id: 158,
          restaurantId: 14,
          name: '테스터',
          score: 5,
          description: '너도 당해봐라',
        },
      ],
    },
  }));

  const { container } = render(<RestaurantDetailPage />);

  expect(container).toHaveTextContent('김초밥');
  expect(container).toHaveTextContent('순대');
});
