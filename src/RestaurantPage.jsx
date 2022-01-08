import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurant } from './actions';

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, [restaurantId]);

  const { name, address, menuItems } = useSelector((state) => ({
    name: state.restaurant.name,
    address: state.restaurant.address,
    menuItems: state.restaurant.menuItems,
  }));

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems
          && menuItems.map((menu) => (
            <li key={`restaurantId ${menu.id}`}>{menu.name}</li>
          ))}
      </ul>
    </div>
  );
}
