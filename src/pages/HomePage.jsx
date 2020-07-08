import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/restaurants">레스토랑</Link>
      </li>
    </ul>
  );
}
