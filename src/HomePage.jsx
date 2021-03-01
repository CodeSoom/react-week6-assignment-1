import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/restaurants">Restaurants</Link>
      </ul>
    </div>
  );
}
