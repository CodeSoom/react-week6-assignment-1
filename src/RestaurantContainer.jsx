import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';
import Restaurant from './Restaurant';
import NotFoundPage from './NotFoundPage';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantContainer() {
  const { id } = useParams();
  const restaurant = useSelector(get('restaurant'));
  const loading = useSelector(get('loading'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, []);

  const restaurantResult = restaurant.id
    ? <Restaurant restaurant={restaurant} /> : <NotFoundPage />;

  return (
    <div>
      {loading ? <Loading /> : restaurantResult}
    </div>
  );
}
