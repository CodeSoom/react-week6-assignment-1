import React from 'react';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { loadRegions, loadCategories } from './actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  dispatch(loadRegions());
  dispatch(loadCategories());
  
  function handleClickRestaurant(restaurant) {
    const url = `restaurants/${restaurant.id}`;
    history.push(url);
  }
  return (
    <div>
      <h2>Restaurants</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer
      onClickRestaurant={handleClickRestaurant}
      />
    </div>
  );
}
