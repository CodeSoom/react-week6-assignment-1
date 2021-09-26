import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurantDetails } from './actions';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

export default function RestaurantDetailsPage({ match }) {
  const dispatch = useDispatch();
  const { params: { id: restaurantId } } = match;

  useEffect(() => {
    dispatch(loadRestaurantDetails({ restaurantId }));
  });

  return (
    <div>
      <RestaurantDetailsContainer />
    </div>
  );
}
