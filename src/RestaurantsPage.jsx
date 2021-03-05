import React from 'react';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { loadRegions, loadCategories } from './actions';
import { useDispatch } from 'react-redux';


export default function RestaurantsPage() {
  const dispatch = useDispatch();
  dispatch(loadRegions());
  dispatch(loadCategories());
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
