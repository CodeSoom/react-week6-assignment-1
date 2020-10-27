import React from 'react';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  function NotFoundPage() {
    return (
      <p>404 not found</p>
    );
  }

  function HomePage() {
    return (
      <p>Home</p>
    );
  }

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <MyComponent />
    </div>
  );
}
