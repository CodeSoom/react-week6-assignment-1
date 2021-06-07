import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../../container/RegionsContainer';
import CategoriesContainer from '../../container/CategoriesContainer';
import RestaurantsContainer from '../../container/RestaurantsContainer';

import {
  loadInitialData,
} from '../../actions';

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
