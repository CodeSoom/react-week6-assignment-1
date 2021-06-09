import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  aboutRestaurant,
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  const selectedRestaurant = useSelector(get('selectedRestaurant'));

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
