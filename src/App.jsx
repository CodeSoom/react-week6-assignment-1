import React from 'react';

import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>이것은 어바웃 페이지</p>
    </div>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  if (pathname === '/') {
    return (
      <HomePage />
    );
  }

  if (pathname === '/about') {
    return (
      <AboutPage />
    );
  }

  return (
    <RestaurantsPage />
  );
}
