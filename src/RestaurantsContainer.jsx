import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    }
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
