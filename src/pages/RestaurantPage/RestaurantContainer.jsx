import React from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import Restaurant from './Restaurant';

import { get } from '../../utils/utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  const history = useHistory();

  function handleClick() {
    history.push('/restaurants');
  }

  if (!restaurant.name) {
    return (
      <p>loading</p>
    );
  }

  return (
    <Restaurant
      restaurant={restaurant}
      handleClick={handleClick}
    />
  );
}
