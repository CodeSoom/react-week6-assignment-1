import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantContainer({ restaurantId }) {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  if (restaurants.length === 0) {
    return (
      <div>
        <h2>loading ...</h2>
      </div>
    );
  }

  const { name, address } = restaurants.find(({ id }) => id === restaurantId);

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
}
