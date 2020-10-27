import React from 'react';

export default function Restaurant({ restaurant }) {
  const { name, address } = restaurant;

  return ((
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  ));
}
