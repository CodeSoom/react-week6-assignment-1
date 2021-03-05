import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
