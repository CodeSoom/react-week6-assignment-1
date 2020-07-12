import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setLoading,
  selectRegion,
  selectCategory,
} from './actions';

import CATEGORIES from '../fixtures/categories';
import REGIONS from '../fixtures/regions';
import RESTAURANTS from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialRestaurant = {
      name: '',
      address: '',
      menuItems: [],
    };

    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: initialRestaurant,
      restaurantId: '',
      loading: false,
      selectedRegion: null,
      selectedCategory: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: REGIONS,
      };

      const state = reducer(initialState, setRegions(REGIONS));

      expect(state.regions).toHaveLength(2);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: CATEGORIES,
      };

      const state = reducer(initialState, setCategories(CATEGORIES));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setLoading', () => {
    it('changes loading', () => {
      const initialState = {
        loading: false,
      };
      const loading = true;
      const state = reducer(initialState, setLoading(loading));

      expect(state.loading).toBeTruthy();
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, setRestaurants(RESTAURANTS));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: REGIONS,
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual(REGIONS[0]);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual(CATEGORIES[0]);
    });
  });

  describe('setRestaurant', () => {
    it('change restaurant', () => {
      const initialState = {
        restaurant: {},
      };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant).toEqual(restaurant);
    });
  });
});
