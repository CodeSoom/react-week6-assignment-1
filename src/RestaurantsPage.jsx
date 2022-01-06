import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialData } from './actions';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
