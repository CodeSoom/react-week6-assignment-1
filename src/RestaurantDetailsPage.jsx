import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurantDetails } from './actions';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

export default function RestaurantDetailsPage({ match }) {
  const dispatch = useDispatch();
  const { params: { id } } = match;

  useEffect(() => {
    dispatch(loadRestaurantDetails({ id }));
  });

  return (
    <div>
      <RestaurantDetailsContainer />
    </div>
  );
}
