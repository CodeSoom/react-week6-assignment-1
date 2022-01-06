import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurant } from '../../store/actions';
import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ id }));
  }, [id]);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
