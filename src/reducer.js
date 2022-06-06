import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
  selectedRestaurant: null,
};

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

  setRestaurantInfo(state, { payload: { restaurantInfo } }) {
    return {
      ...state,
      restaurantInfo,
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

  selectRestaurant(state, { payload: { restaurantId } }) {
    const { restaurants } = state;
    return {
      ...state,
      selectedRestaurant: restaurants.find(equal('id', restaurantId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
