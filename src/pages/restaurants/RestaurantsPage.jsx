import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from '@/store/async-actions';

import RegionsContainer from './Regions/RegionsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
import RestaurantsContainer from './Restaurants/RestaurantsContainer';

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
