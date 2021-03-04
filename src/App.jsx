import React from 'react';

export default function App({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>{region.name}</li>
      ))}
    </ul>
  );
}
