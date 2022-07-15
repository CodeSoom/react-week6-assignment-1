import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
} from '../services/api';

import {
  setCategories,
  setLoading,
  setRegions,
  setRestaurant,
  setRestaurants,
} from './actions';

export function loadInitialData() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));

    dispatch(setLoading(false));
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

    dispatch(setLoading(true));

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));

    dispatch(setLoading(false));
  };
}

export function loadRestaurant({ restaurantId } = {}) {
  return async (dispatch) => {
    if (!restaurantId) {
      return;
    }

    dispatch(setLoading(true));

    const restaurant = await fetchRestaurant({ restaurantId });
    dispatch(setRestaurant(restaurant));

    dispatch(setLoading(false));
  };
}
