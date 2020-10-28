import React from 'react';

export default function RestaurantDatail({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      비빔밥
      짬뽕
      탕수육
      팔보채
    </div>
  );
}
