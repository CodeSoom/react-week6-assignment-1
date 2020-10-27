import React from 'react';

import HomePage from './HomePage';

import RestaurantsPage from './RestaurantsPage';

function AboutPage() {
  return (
    <p>About...</p>
  );
}

function NotFoundPage() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );

  // if (pathname === '/') {
  //   return (
  //     <p>Home</p>
  //   );
  // }
  // return (
  //   <RestaurantsPage />
  // );
}
