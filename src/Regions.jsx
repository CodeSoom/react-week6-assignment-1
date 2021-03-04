import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id} onClick={() => onClick(id)}>{name}</li>
      ))}
    </ul>
  );
}
