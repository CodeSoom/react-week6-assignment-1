import React from 'react';

import { render } from '@testing-library/react';

import RestaruantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  context('레스토랑 값이 있는 경우', () => {
    it('레스토랑 정보를 화면에 출력한다', () => {
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

      const { getByText } = render((
        <RestaruantDetail
          restaurant={restaurant}
        />
      ));

      expect(getByText(/양천주가/)).not.toBeNull();
      expect(getByText(/서울 강남구/)).not.toBeNull();
      expect(getByText(/탕수육/)).not.toBeNull();
      expect(getByText(/팔보채/)).not.toBeNull();
    });
  });

  context('레스토랑 값이 화면에 없는 경우', () => {
    it('로딩 화면을 출력한다', () => {
      const restaurant = null;

      const { container } = render((
        <RestaruantDetail
          restaurant={restaurant}
        />
      ));

      expect(container).toHaveTextContent('continue loading...');
    });
  });
});
