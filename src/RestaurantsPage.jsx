import React from 'react';

import RestaurantsContainer from './RestaurantsContainer';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function RestaurantsPage() {
  return (
    <div>
      <CategoriesContainer />
      <RegionsContainer />
      <RestaurantsContainer />
    </div>
  );
}
