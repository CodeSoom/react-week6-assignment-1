import React from 'react';

export default function Regions({ regions, onClick, selectedId }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <button type="button" key={id} onClick={() => onClick(id)}>
        {`${name}${selectedId === id ? '(v)':''}`}</button>
      ))}
    </ul>
  );
}
