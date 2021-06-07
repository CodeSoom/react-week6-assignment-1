import React from 'react';

import HeaderPage from './HeaderPage';

export default function HomePage() {
  return (
    <>
      <HeaderPage />
      <h2>Home</h2>
      <ul>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/restaurants'>Restaurants</a>
        </li>
      </ul>
    </>
  );
}
