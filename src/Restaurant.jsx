import React from 'react';

export default function Restaurant({ restaurant }) {
  const { name } = restaurant;

  return ((
    <div>
      <h2>{name}</h2>
    </div>
  ));
}
