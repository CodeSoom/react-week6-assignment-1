import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurant } from './actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  const { restaurantId } = useParams();

  const { name, address, menuItems } = restaurant;

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    dispatch(loadRestaurant(restaurantId));
  }, []);

  // TODO: add loading state
  if (!restaurant.id) {
    return <p>loading...</p>;
  }

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
