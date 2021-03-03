import React from 'react';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
  }[pathname];

  return (
    <div>
      <h1>헤더</h1>
      <MyComponent />
      <RestaurantsPage />
    </div>
  );
}
