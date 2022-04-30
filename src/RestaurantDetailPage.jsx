import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRestaurant } from './services/api';

async function loadRestaurant({ restaurantId }) {
  const restaurant = await fetchRestaurant({ restaurantId });
  return restaurant;
}

export default function RestaurantDetailPage({ params }) {
  // * useParams : react-router 에서 사용하는 파라미터들을 확인할 수 있다.
  // * 이 컴포넌트에 전달받은 params 가 있으면 그걸 사용하고, 없으면 useParams 를 사용한다.
  const { restaurantId } = params || useParams();

  useEffect(() => {
    loadRestaurant({ restaurantId });
  }, []);

  return (
    <div>
      레스토랑
      {' '}
      {restaurantId}
    </div>
  );
}
