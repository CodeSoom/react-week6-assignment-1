import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Restaurants</Link></li>
      </ul>
    </div>
  );
}
