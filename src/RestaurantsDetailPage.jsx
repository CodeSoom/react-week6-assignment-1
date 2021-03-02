import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetail } from './actions';

function RestaurantsDetailePage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  return (
    <div />
  );
}

export default RestaurantsDetailePage;
