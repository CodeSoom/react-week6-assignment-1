import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

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

  function handleClick(restaurantId) {
    dispatch(aboutRestaurant(restaurantId));
    dispatch(loadInitialData());
  }

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
