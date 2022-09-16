import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurantDetail,
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
      restaurantDetail: null,
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

      const { regions } = reducer(initialState, setRegions(REGIONS));

      expect(regions).toHaveLength(REGIONS.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const { categories } = reducer(initialState, setCategories(CATEGORIES));

      expect(categories).toHaveLength(CATEGORIES.length);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const { restaurants } = reducer(initialState, setRestaurants(RESTAURANTS));

      expect(restaurants).toHaveLength(RESTAURANTS.length);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: REGIONS,
        selectedRegion: null,
      };

      const { selectedRegion } = reducer(initialState, selectRegion(1));

      expect(selectedRegion).toEqual(REGIONS[0]);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: CATEGORIES,
        selectedCategory: null,
      };

      const { selectedCategory } = reducer(initialState, selectCategory(1));

      expect(selectedCategory).toEqual(CATEGORIES[0]);
    });
  });

  describe('setRestaurantDetail', () => {
    it('changes restaurant detail', () => {
      const initialState = {
        restaurantDetail: null,
      };

      const { restaurantDetail } = reducer(
        initialState, setRestaurantDetail(RESTAURANT_DETAIL),
      );

      expect(restaurantDetail).toEqual(RESTAURANT_DETAIL);
    });
  });
});
