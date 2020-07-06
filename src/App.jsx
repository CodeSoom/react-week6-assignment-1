import React from 'react';

import {
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <Route path="/restaurants" component={RestaurantsPage} />
    </div>
  );
}
