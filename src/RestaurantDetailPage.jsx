import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get } from './utils';

import {
  loadRestaurantDetail, selectRestaurant,
} from './actions';

export default function restaurantDetailPage({ params }) {
  const dispatch = useDispatch();
  const { restaurantId } = params || useParams();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId }));
    dispatch(selectRestaurant({ restaurantId }));
  }, [restaurantId]);

  if (!restaurantDetail) {
    return (
      <p>loading...</p>
    );
  }

  return (
    <div>
      <h2>{restaurantDetail.name}</h2>
      <p>
        주소 :
        {' '}
        {restaurantDetail.address}
      </p>

      <h3>메뉴</h3>
      <ul>
        {
          restaurantDetail.menuItems
          && restaurantDetail.menuItems.map((menu) => <li key={menu.id}>{menu.name}</li>)
        }
      </ul>
    </div>
  );
}
