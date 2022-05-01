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

export function loadRestaurantDetail({ restaurantId }) {
  return async (dispatch) => {
    if (!restaurantId) {
      return;
    }

    const restaurantDetail = await fetchRestaurantDetail({
      restaurantId,
    });
    dispatch(setRestaurantDetail(restaurantDetail));
  };
}
