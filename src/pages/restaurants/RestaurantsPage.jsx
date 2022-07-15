import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './Regions/RegionsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
import RestaurantsContainer from './Restaurants/RestaurantsContainer';

import {
  loadInitialData,
} from '../../store/async-actions';

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
