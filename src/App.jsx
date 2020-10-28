import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <Header />
      <MyComponent />
    </div>
  );
}
