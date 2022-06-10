import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetails, resetSelectedItems } from '../actions';

import RestaurantDetailsContainer from '../RestaurantDetailsContainer';

export default function RestaurantDetailPage() {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails(params.restaurantId));

    return () => {
      dispatch(resetSelectedItems());
    };
  }, [params]);

  return (
    <RestaurantDetailsContainer />
  );
}
