import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from '../actions';

import RegionsContainer from '../Container/RegionsContainer';
import CategoriesContainer from '../Container/CategoriesContainer';
import RestaurantsContainer from '../Container/RestaurantsContainer';

export default function RestaurantsPage() {
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
}
