import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from '../../../store/async-actions';

import { get } from '../../../utils';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, [restaurantId]);

  return (
    <>
      <h2>{restaurant.name}</h2>
      <p>
        주소:
        {' '}
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {restaurant.menus.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
