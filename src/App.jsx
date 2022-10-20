import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
