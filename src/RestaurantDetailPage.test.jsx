import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('renders restaurant information', () => {
    const { container } = render(
      <RestaurantDetailPage />,
    );

    // - https://eatgo-customer-api.ahastudio.com/restaurants/1
    useSelector.mockImplementation((selector) => selector({
      restaurantInformation: [
        {
          id: 1,
          category: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          menuItems: [
            { id: 1, restaurantId: 1, name: '비빔밥' },
            { id: 2, restaurantId: 1, name: '짬뽕' },
            { id: 32, restaurantId: 1, name: '유산슬' },
          ],
        },
      ],
    }));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 123456');
    expect(container).toHaveTextContent('비빔밥');
  });
});
