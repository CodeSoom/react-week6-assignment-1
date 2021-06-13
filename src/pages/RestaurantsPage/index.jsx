import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RegionsContainer from '../../container/RegionsContainer';
import CategoriesContainer from '../../container/CategoriesContainer';
import RestaurantsContainer from '../../container/RestaurantsContainer';

import {
  loadInitialData,
} from '../../actions';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickChangeRoute(restaurantId) {
    history.push(`/restaurants/${restaurantId}`);
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickChangeRoute={handleClickChangeRoute} />
    </div>
  );
}
