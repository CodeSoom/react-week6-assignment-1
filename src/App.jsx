import React from 'react';
import AboutPage from './AboutPage';

import HomePage from './HomePage';

import RestaurantsPage from './RestaurantsPage';

import NotFoundPage from './NotFoundPage';

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
