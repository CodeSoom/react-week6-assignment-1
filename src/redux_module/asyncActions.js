import {
  setCategories,
  setRegions,
  setSelectedRestaurants,
  setSelectedRestaurant,
} from './RestaurantSlice';
import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantInfo,
} from '../services/api';

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const loadRestaurants = (regionName, categoryId) => async (dispatch) => {
  const restaurants = await fetchRestaurants(regionName, categoryId);
  dispatch(setSelectedRestaurants(restaurants));
};

export const loadRestaurantInfo = (restaurantId) => async (dispatch) => {
  const restaurant = await fetchRestaurantInfo(restaurantId);
  dispatch(setSelectedRestaurant(restaurant));
};
