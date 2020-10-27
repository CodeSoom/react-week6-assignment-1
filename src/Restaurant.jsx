import React from 'react';

export default function Restaurant({ restaurant: { name, address } }) {
  return ((
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  ));
}
