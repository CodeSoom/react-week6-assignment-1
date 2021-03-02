import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Restaurants">Restaurants</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
