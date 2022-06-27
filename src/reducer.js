import { equal } from './utils';

import INITIAL_STATE from '../fixtures/initialState';

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurantDetails(state, { payload: { restaurantDetails } }) {
    return {
      ...state,
      restaurantDetails,
    };
  },

  setStatus(state, { payload }) {
    return {
      ...state,
      status: { ...INITIAL_STATE.status, ...payload },
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  resetSelectedItems(state) {
    return {
      ...state,
      selectedCategory: INITIAL_STATE.selectedCategory,
      selectedRegion: INITIAL_STATE.selectedRegion,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = INITIAL_STATE, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
