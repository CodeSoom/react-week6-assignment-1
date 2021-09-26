import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function Restaurantscontainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  // GET /restaurants -> collection
  // GET /restaurants/1 -> element, member
  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault(); // 링크로 바로 이동 방지
      onClickRestaurant(restaurant);
    };
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
