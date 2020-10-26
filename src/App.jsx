import React from 'react';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  const Page = {
    '/restaurants': RestaurantsPage,
  }[pathname];

  return (
    <Page />
  );
}
