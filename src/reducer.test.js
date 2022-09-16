import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurantDetailData,
} from './actions';

import { equal } from './utils';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';
import RESTAURANT_DETAIL from '../fixtures/restaurantDetail';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
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

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: REGIONS,
        selectedRegion: null,
      };

      const targetId = 1;

      const state = reducer(initialState, selectRegion(targetId));

      expect(state.selectedRegion).toEqual(REGIONS.find(equal('id', targetId)));
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const targetId = 1;

      const state = reducer(initialState, selectCategory(targetId));

      expect(state.selectedCategory).toEqual(CATEGORIES.find(equal('id', targetId)));
    });
  });

  describe('setRestaurantDetailData', () => {
    it('changes restaurant detail', () => {
      const initialState = {
        restaurantDetail: null,
      };

      const { restaurantDetail } = reducer(
        initialState, setRestaurantDetailData(RESTAURANT_DETAIL),
      );

      expect(restaurantDetail).toEqual(RESTAURANT_DETAIL);
    });
  });
});
