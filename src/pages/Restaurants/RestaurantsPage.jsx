import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesContainer from '../../CategoriesContainer';
import RegionsContainer from '../../RegionsContainer';
import RestaurantsContainer from '../../RestaurantsContainer';

import { loadInitialData } from '../../actions';

const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
};

export default RestaurantsPage;
