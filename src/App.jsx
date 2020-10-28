import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname];

  return (
    <MyComponent />
  );
}
