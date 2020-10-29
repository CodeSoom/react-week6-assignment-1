import React from 'react';

import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';

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
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <MyComponent />
    </div>
  );
}
