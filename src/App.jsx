import React from 'react';

import { Link } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
  }[pathname];

  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <MyComponent />
      <RestaurantsPage />
    </div>
  );
}
