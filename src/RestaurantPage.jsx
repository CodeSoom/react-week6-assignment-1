import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ id }));
  });
  // api에서 레스토랑 정보를 받아와야 한다.
  // 그러기 위해 레스토랑 아이디가 필요하다.
  // api를 호출할 때 undefined를 보낸다. 비동기 문제?
  return (
    <div>
      <h2>레스토랑 이름</h2>
      <p>주소: </p>
      <h3>메뉴</h3>
      <ul>
        <li>메뉴 1번</li>
        <li>메뉴 2번</li>
      </ul>
    </div>
  );
}
