import React from 'react';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  if (pathname === '/') {
    return (
      <p>Home</p>
    );
  }

  return (
    <div>
      <RestaurantsPage />
    </div>
  );
}
