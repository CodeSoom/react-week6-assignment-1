import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';

export default function App() {
  const { location: { pathname } } = window;

  function NotFoundPage() {
    return (
      <p>404 not found</p>
    );
  }

  function HomePage() {
    return (
      <h2>Home</h2>
    );
  }

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    </div>
  );
}
