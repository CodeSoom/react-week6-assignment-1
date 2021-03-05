import { fetchRegions, fetchCategories } from './services/api';

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