import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';
import RESTAURANT from '../../fixtures/restaurant';

describe('RestaurantDetail', () => {
  const renderRestaurantDetail = (restaurant) => render(
    <RestaurantDetail restaurant={restaurant} />,
  );

  context('레스토랑 정보가 없으면', () => {
    it('"Loading..." 텍스트가 화면에 나타난다.', () => {
      const restaurant = {};
      const { getByText } = renderRestaurantDetail(restaurant);

      expect(getByText('Loading...')).not.toBeNull();
    });
  });

  context('레스토랑 정보가 있으면', () => {
    it('메뉴가 없으면 "메뉴가 없습니다." 텍스트가 화면에 나타난다.', () => {
      const restaurant = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [],
      };
      const { getByText } = renderRestaurantDetail(restaurant);

      expect(getByText('메뉴가 없습니다.')).not.toBeNull();
    });

    it('레스토랑 정보가 화면에 나타난다.', () => {
      const restaurant = RESTAURANT;
      const { getByText } = renderRestaurantDetail(restaurant);

      expect(getByText(RESTAURANT.name)).not.toBeNull();
      expect(getByText(RESTAURANT.menuItems[0].name)).not.toBeNull();
      expect(getByText(RESTAURANT.menuItems[1].name)).not.toBeNull();
    });
  });
});
