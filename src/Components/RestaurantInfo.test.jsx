import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfo from './RestaurantInfo';

jest.mock('react-redux');

test('RestaurantInfo', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: {
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
      reviews: [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
    },
  }));

  const { getByText } = render(<RestaurantInfo />);
  expect(getByText('양천주가')).not.toBeNull();
  expect(getByText('비빔밥')).not.toBeNull();
  expect(getByText('테스터')).not.toBeNull();
  expect(getByText('훌륭하다 훌륭하다 지구인놈들')).not.toBeNull();
});
