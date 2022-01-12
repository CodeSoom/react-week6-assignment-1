import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from '../actions';

import RegionsContainer from '../Container/RegionsContainer';
import CategoriesContainer from '../Container/CategoriesContainer';
import RestaurantsContainer from '../Container/RestaurantsContainer';

export default function RestaurantsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  function handleClickRestaurant(restaurant) {
    // TODO: 이동
    const url = `/restaurants/${restaurant.id}`;

    navigate(url);
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
