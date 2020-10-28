import React from 'react';

export default function RestaurantDatail({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
     <p>{restaurant.address}</p>
    </div>
  );
}
