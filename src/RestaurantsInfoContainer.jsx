import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurantsInfo } from './actions';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantsInfoContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantsInfo(id));
  }, [id]);

  const { restaurantInfo } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  if (!restaurantInfo) {
    return <p>Loading...</p>;
  }

  return (
    <RestaurantDetail restaurantInfo={restaurantInfo} />
  );
}
