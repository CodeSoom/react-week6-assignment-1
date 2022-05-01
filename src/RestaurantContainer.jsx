import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from './actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    dispatch(loadRestaurant(restaurantId));
  }, []);

  if (!restaurantId) {
    return <p>잘못된 경로 입니다.</p>;
  }

  if (restaurant.loading || !restaurant.data) {
    return <p>loading...</p>;
  }

  const { name, address, menuItems } = restaurant.data;

  // TODO: 분리하기
  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
