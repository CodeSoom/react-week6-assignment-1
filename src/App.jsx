import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/Restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <MyComponent />
    </div>
  );
}
