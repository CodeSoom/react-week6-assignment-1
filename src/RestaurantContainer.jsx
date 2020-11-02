import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import Restaurant from './Restaurant';

export default function RestaurantContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const { name, address, menuItems } = restaurant;

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, []);

  return (
    <Restaurant
      name={name}
      address={address}
      menuItems={menuItems}
    />
  );
}
