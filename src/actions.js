import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantDetails,
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

export function setRestaurantDetails(restaurantDetails) {
  return {
    type: 'setRestaurantDetails',
    payload: { restaurantDetails },
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

export function loadRestaurantDetails(restaurantId) {
  return async (dispatch) => {
    if (!restaurantId) return;

    try {
      const restaurantDetails = await fetchRestaurantDetails({ restaurantId });
      dispatch(setRestaurantDetails(restaurantDetails));
    } catch (error) {
      throw new Error('레스토랑 상세 정보를 가져오지 못했어요.');
    }
  };
}
