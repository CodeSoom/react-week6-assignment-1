import React from 'react';

import RestaurantDetail from './RestaurantDetail';
import RESTAURANTDETAIL from '../fixtures/restaurantDetail.js'

// 1. useEffect를 통해서 id를 통해서 fetchRestaurantDetail을 통해서 정보를 얻는다
// 2. 받는 동안 Loading... 문구가 보인다
// 3. 완료시 detail Page를 생성한다.

export default function RestaurantDetailPage() {
  // TODO: clear fixture
  const { name, address, menuItems } = RESTAURANTDETAIL;
  return (
    <RestaurantDetail
      name={name}
      address={address}
      menuItems={menuItems}
    />
  );
}
