import React from 'react';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RestaurantsPage from './pages/Restaurants/RestaurantsPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

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
