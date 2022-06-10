import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantById,
} from '../services/api';

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
    payload: {
      restaurants,
      key: 'restaurants',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setRestaurantDetail(restaurantDetail) {
  return {
    type: 'setRestaurantDetail',
    payload: {
      key: 'restaurantDetail',
      restaurantDetail,
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setLoading(key, isLoading) {
  return {
    type: 'setLoading',
    payload: {
      key,
      isLoading,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setError(key, errorMessage) {
  return {
    type: 'setError',
    payload: {
      key,
      isLoading: false,
      isError: true,
      errorMessage,
    },
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
    try {
      const {
        selectedRegion: region,
        selectedCategory: category,
      } = getState();

      if (!region || !category) {
        return;
      }

      dispatch(setLoading('restaurants', true));
      const restaurants = await fetchRestaurants({
        regionName: region.name,
        categoryId: category.id,
      });
      dispatch(setRestaurants(restaurants));
    } catch (error) {
      dispatch(setError('restaurants', error.message));
    }
  };
}

export function loadRestaurantDetail(restaurantId) {
  return async (dispatch) => {
    try {
      if (!restaurantId) {
        return;
      }

      dispatch(setLoading('restaurantDetail', true));

      const restaurantDetail = await fetchRestaurantById(restaurantId);
      dispatch(setRestaurantDetail(restaurantDetail));
    } catch (error) {
      dispatch(setError('restaurantDetail', error.message));
    }
  };
}
