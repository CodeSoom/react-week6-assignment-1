import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantDetail } from '../actions';

import { get } from '../utils';

export default function RestaurantDetailPage() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  try {
    useEffect(() => {
      dispatch(loadRestaurantDetail({ restaurantId }));
    }, [restaurantId]);

    const restaurantDetail = useSelector(get('restaurantDetail'));

    if (!restaurantDetail) {
      return <p>로딩 중...</p>;
    }

    const { name, address, menuItems } = restaurantDetail;

    return (
      <>
        <h2>{name}</h2>
        <p>
          주소:
          {address}
        </p>
        <h3>메뉴</h3>
        <ul>
          {menuItems.map(({ id, name: menu }) => (
            <li key={id}>{menu}</li>
          ))}
        </ul>
      </>
    );
  } catch (err) {
    return (
      <p>
        존재하지 않는 식당이거나 데이터를 불러오는 과정에서 에러가 발생했습니다.
      </p>
    );
  }
}
