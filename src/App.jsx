import React from 'react';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  if (pathname === '/') {
    return (
      <p>home</p>
    );
  }

  return (
    <div>
      <RestaurantsPage />
    </div>
  );
}
