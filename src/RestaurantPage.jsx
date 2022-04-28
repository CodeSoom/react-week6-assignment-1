import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from './actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, [restaurantId]);

  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  if (!restaurant) {
    return (
      <p>레스토랑 정보가 없네요...</p>
    );
  }

  const { name, address, menuItems } = restaurant;

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
        {menuItems.map(({ id, name: menuName }) => (
          <li key={id}>
            {menuName}
          </li>
        ))}
      </ul>
    </div>
  );
}
