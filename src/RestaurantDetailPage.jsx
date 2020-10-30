import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurantDetail } from './actions';
import RestaurantDetail from './RestaurantDetail';

// 1. useEffect를 통해서 id를 통해서 fetchRestaurantDetail을 통해서 정보를 얻는다
// 2. 받는 동안 Loading... 문구가 보인다
// 3. 완료시 detail Page를 생성한다.

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail());
  });

  return (
    <div>aa</div>
    /* <RestaurantDetail
      name={name}
      address={address}
      menuItems={menuItems}
    /> */
  );
}
