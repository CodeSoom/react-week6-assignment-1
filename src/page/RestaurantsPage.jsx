import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from '../actions';

import RegionsContainer from '../RegionsContainer';
import CategoriesContainer from '../CategoriesContainer';
import RestaurantsContainer from '../RestaurantsContainer';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <>
      <h2>Restaurnats</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
