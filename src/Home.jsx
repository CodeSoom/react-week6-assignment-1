import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/restaurants">
            Restaurants
          </Link>
        </li>
      </ul>
    </>
  );
}
