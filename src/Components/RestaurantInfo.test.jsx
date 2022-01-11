import { render } from '@testing-library/react';

import RestaurantInfo from './RestaurantInfo';

test('renders RestaurantInfo', () => {
  const { getByText } = render((
    <RestaurantInfo
      restaurantName="양천주가"
      address="서울 강남구 123456"
      menuItems={[{
        id: 1,
        restaurantId: 1,
        name: '비빔밥',
      }]}
    />));

  expect(getByText('양천주가')).not.toBeNull();
  expect(getByText('비빔밥')).not.toBeNull();
});
