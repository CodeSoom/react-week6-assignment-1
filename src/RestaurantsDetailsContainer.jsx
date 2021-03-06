import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import { loadRestaurantsDetails } from './actions';

import RestaurantsDetails from './RestaurantsDetails';

import NotFound from './NotFound';

export default function RestaurantsDetailsContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  if (!Number(id)) {
    return (<NotFound />);
  }

  useEffect(() => {
    dispatch(loadRestaurantsDetails(id));
  }, [id]);

  const restaurantsDetails = useSelector(get('restaurantsDetails'));

  return (
    <RestaurantsDetails restaurantsDetails={restaurantsDetails} />
  );
}
