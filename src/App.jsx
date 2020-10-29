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

  function AboutPage() {
    return (
      <h2>About</h2>
    );
  }

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/About': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <MyComponent />
    </div>
  );
}
