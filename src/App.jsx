import React from 'react';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function NotFoundPage() {
  return (
  // Todo: ...
    <></>
  );
}
export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/restaurants': RestaurantsPage,
    '/': HomePage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );

  // if (pathname === '/') {
  // return (
  // <p>Home</p>
  // );
  // }

  // return (
  // <RestaurantsPage />
  // );
}
