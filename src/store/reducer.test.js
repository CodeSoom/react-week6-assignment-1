import {
  CATEGORIES,
  REGIONS,
  RESTAURANT,
  RESTAURANTS,
} from '../../fixtures';

import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  setLoading,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      isLoading: false,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(REGIONS));

      expect(state.regions).toHaveLength(REGIONS.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(CATEGORIES));

      expect(state.categories).toHaveLength(CATEGORIES.length);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(RESTAURANTS));

      expect(state.restaurants).toHaveLength(RESTAURANTS.length);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const state = reducer(initialState, setRestaurant(RESTAURANT));

      expect(state.restaurant).toEqual(RESTAURANT);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: REGIONS,
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(REGIONS[0].id));

      expect(state.selectedRegion).toEqual(REGIONS[0]);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(CATEGORIES[0].id));

      expect(state.selectedCategory).toEqual(CATEGORIES[0]);
    });
  });

  describe('setLoading', () => {
    it('changes isLoading', () => {
      const initialState = {
        loading: false,
      };

      const state = reducer(initialState, setLoading(true));

      expect(state.isLoading).toBeTruthy();
    });
  });
});
