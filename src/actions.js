import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantInfo,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function setRestaurantInfo(restaurantInfo) {
  return {
    type: 'setRestaurantInfo',
    payload: { restaurantInfo },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function selectRestaurant(id) {
  return {
    type: 'selectRestaurant',
    payload: { id },
  };
}

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

export function loadRestaurantInfo() {
  return async (dispatch, getState) => {
    dispatch(setRestaurantInfo(null));

    const {
      selectedRestaurant: restaurant,
    } = getState();

    const restaurantInfo = await fetchRestaurantInfo({
      id: restaurant.id,
    });
    dispatch(setRestaurantInfo(restaurantInfo));
  };
}
