import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';

import RestaurantDetail from './RestaurantDetail';

import loadRestaurant from './actions';

import { get } from './utils';

function RestaurantsDetailPage({ params }) {
  const { id } = params || useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    console.log(id);
    dispatch(loadRestaurant(id));
    console.log(id);
  }, []);

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
    </>
  );
}

export default withRouter(RestaurantsDetailPage);
