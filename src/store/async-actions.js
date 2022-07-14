import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
} from '../services/api';

import {
  setCategories,
  setRegions,
  setRestaurant,
  setRestaurants,
} from './actions';

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId } = {}) {
  return async (dispatch) => {
    if (!restaurantId) {
      return;
    }

    const restaurant = await fetchRestaurant({ restaurantId });
    dispatch(setRestaurant(restaurant));
  };
}
