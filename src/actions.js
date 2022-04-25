import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantDetail,
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

export function setRestaurantDetail(restaurantDetail) {
  return {
    type: 'setRestaurantDetail',
    payload: { restaurantDetail },
  };
}

export function selectRegion({ id: regionId }) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function selectCategory({ id: categoryId }) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function selectRestaurant({ id: restaurantId }) {
  return {
    type: 'selectRestaurant',
    payload: { restaurantId },
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

export function loadRestaurantDetail() {
  return async (dispatch, getState) => {
    const {
      selectedRestaurant: restaurant,
    } = getState();

    if (!restaurant) {
      return;
    }

    if (!restaurant.id) {
      return;
    }

    const restaurantDetail = await fetchRestaurantDetail({
      restaurantId: restaurant.id,
    });
    dispatch(setRestaurantDetail(restaurantDetail));
  };
}
