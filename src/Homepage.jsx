import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </div>
  );
}
