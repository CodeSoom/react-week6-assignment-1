import React from 'react';

import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  const Page = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || ErrorPage;

  return (
    <Page />
  );
}
