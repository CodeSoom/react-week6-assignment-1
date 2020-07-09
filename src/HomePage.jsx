import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <li><Link to="about">About</Link></li>
      <li><Link to="restaurants">Restaurants</Link></li>
      <li><Link to="notfoundtest">NotFoundPage</Link></li>
    </div>
  );
}
