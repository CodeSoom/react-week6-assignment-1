import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setRestaurantId,
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

      const regions = [REGIONS[0]];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [CATEGORIES[0]];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setLoading', () => {
    it('changes loading', () => {
      const initialState = {
        loading: false,
      };
      const loading = true;
      const state = reducer(initialState, setLoading(loading));

      expect(state.loading).toBeFalsy();
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [RESTAURANTS[0]];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [REGIONS[0]],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual(REGIONS[0]);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [CATEGORIES[0]],
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

  describe('setRestaurantId', () => {
    it('change restaurant id', () => {
      const initialState = {
        restaurantId: '',
      };

      const restaurantId = restaurant.id;
      const state = reducer(initialState, setRestaurantId(restaurantId));
      expect(state.restaurantId).toEqual(restaurantId);
    });
  });
});
