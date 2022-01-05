import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
  resetRestaurant,
} from './actions';

import Restaurant from './Restaurant';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));

    return () => {
      dispatch(resetRestaurant());
    };
  }, []);

  return (
    <Restaurant
      restaurant={restaurant}
    />
  );
}
