import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetails } from '../actions';

export default function RestaurantDetailPage() {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails(params.restaurantId));
  }, [params]);

  return (
    <div>
      <h2>마법사주방</h2>
      <p>주소: 서울 강남구 123456</p>
      <h3>메뉴</h3>
      <ul>
        <li>비빔밥</li>
      </ul>
    </div>
  );
}

// TODO: 페이지 이동시 loading 구현
// 통신 실패처리
