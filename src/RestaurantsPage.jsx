import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;

    // - react-router-dom V6 부터 useHistory 대신 useNavigate 를 사용한다.
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
