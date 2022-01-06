import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../Components/RegionsContainer';
import CategoriesContainer from '../Components/CategoriesContainer';
import RestaurantsContainer from '../Components/RestaurantsContainer';

import {
  loadInitialData,
} from '../redux/actions';

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
