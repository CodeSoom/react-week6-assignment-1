import React from 'react';

import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  if (pathname === '/') {
    return (
      <HomePage />
    );
  }

  return (
    <RestaurantsPage />
  );
}
