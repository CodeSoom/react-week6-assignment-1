import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

// import RestaurantsInfoContainer from './RestaurantsInfoContainer';

function RestaurantDetail({ restaurant }) {
  return (
    <>
      <h2>양천주가</h2>
      <h2>{restaurant.id}</h2>
      <p>주소: </p>
      <h3>메뉴</h3>
      <ul>
        <li>메뉴 리스트가 들어올 자리</li>
      </ul>
    </>
  );
}

function RestaurantsInfoContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}

export default function RestaurantsInfoPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantsInfoContainer restaurantId={id} />
  );
}
