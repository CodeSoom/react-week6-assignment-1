import React from 'react';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  console.log(window.location.pathname);

  return (
    <RestaurantsPage />
  );
}
