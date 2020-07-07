import React from 'react';

export default function Restaurant({ restaurant }) {
  return (
    <li key={restaurant.id}>{restaurant.name}</li>
  );
}
