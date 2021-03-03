import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <ul>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Restaurants">Restaurants</Link></li>
    </ul>
  );
}
