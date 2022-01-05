import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const restaurant = useSelector(get('restaurant'));
    const { restaurantId } = useParams();
    dispatch(loadRestaurant(restaurantId));
  });
  console.log(restaurant)
  // api에서 레스토랑 정보를 받아와야 한다.
  // 그러기 위해 레스토랑 아이디가 필요하다.
  // 처음 restaurant가 null 값이 뜸. 비동기 문제인듯.
  return (
    <div>
      <h2>가게이름</h2>
      <p>주소: </p>
      <h3>메뉴</h3>
      <ul>
        <li>메뉴 1번</li>
        <li>메뉴 2번</li>
      </ul>
    </div>
  );
}
