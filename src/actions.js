import { fetchRegions,
  fetchCategories,
  fetchRestaurants } from './services/api';

export const selectRegion = (id) => (
    {
      type: 'selectRegion',
      payload: {
        id,
      },
    }
  );

export const setRegions = (regions) => {
  return (
    {
      type: 'setRegions',
      payload: {
        regions
      },
    }
  );
}

export const selectCategory = (id) => (
  {
    type: 'selectCategory',
    payload: {
      id,
    },
  }
);

export const setCategories = (categories) => {
  return (
    {
      type: 'setCategories',
      payload: {
        categories
      },
    }
  );
}

export const setRestaurants = (restaurants) => {
  return (
    {
      type: 'setRestaurants',
      payload: {
        restaurants
      },
    }
  );
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
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

    if(!region || !category) {
      return ;
    }
    const restaurants = await fetchRestaurants({ regionName: region.name, categoryId: category.id });
    dispatch(setRestaurants(restaurants));
  };
}