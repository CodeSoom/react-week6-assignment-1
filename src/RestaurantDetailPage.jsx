import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { loadRestaurantDetail } from './actions';

import RestaurantDetailContainer from './RestaurantDetailContainer';

function RestaurantDetailPage({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}

export default withRouter(RestaurantDetailPage);
