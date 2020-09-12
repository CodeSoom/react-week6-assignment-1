import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/invalid">Invalid</Link>
        </li>
      </ul>
    </>
  );
}
