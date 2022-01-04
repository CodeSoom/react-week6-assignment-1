import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadRestaurant,
} from './actions';

import Restaurant from './Restaurant';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);

  useEffect(() => {
    // TODO: restaurant 요청 id 값 => 동적으로 처리
    dispatch(loadRestaurant(1));
  }, []);

  return (
    <Restaurant restaurant={restaurant} />
  );
}
