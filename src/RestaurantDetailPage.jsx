import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);

  return (
    <div>
      { restaurant
        ? (
          <div>
            <h2>{restaurant.name}</h2>
            <p>
              주소:
              {' '}
              {restaurant.address}
            </p>
            <h3>메뉴</h3>
            <ul>
              {restaurant.menuItems && restaurant.menuItems.map((menu) => (
                <li>{menu.name}</li>
              ))}
            </ul>
          </div>
        )
        : (<p>loading...</p>)}
    </div>
  );
}
