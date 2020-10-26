import React from 'react';

import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  console.log(window.location);

  const Page = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
  }[pathname] || ErrorPage;

  return (
    <Page />
  );
}
