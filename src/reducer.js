import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
};

const reducers = {
  setRegions(state, { payload }) {
    return {
      ...state,
      regions: payload.regions,
    };
  },
  setCategories(state, { payload }) {
    return {
      ...state,
      categories: payload.categories,
    };
  },
  setRestaurants(state, { payload }) {
    return {
      ...state,
      restaurants: payload.restaurants,
    };
  },
  setRestaurant(state, { payload }) {
    return {
      ...state,
      restaurant: payload.restaurant,
    };
  },
  selectRegion(state, { payload }) {
    return {
      ...state,
      selectedRegion: state.regions.find(equal('id', payload.regionId)),
    };
  },
  selectCategory(state, { payload }) {
    return {
      ...state,
      selectedCategory: state.categories.find(equal('id', payload.categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
