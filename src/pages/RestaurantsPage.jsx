import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import { loadInitialData } from '../actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
