import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurantDetails,
} from './actions';

import INITIAL_STATE from '../fixtures/initialState';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(INITIAL_STATE);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurantDetails', () => {
    it('changes restaurantDetails', () => {
      const initialState = {
        restaurantDetails: null,
      };

      const restaurantDetails = {
        id: 1,
        categoryId: 1,
        name: '마법사주방',
        address: '서울 강남구 123456',
        menuItems: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
          { id: 2, restaurantId: 1, name: '짬뽕' },
        ],
      };

      const state = reducer(initialState, setRestaurantDetails(restaurantDetails));

      expect(state.restaurantDetails).toEqual({
        id: 1,
        categoryId: 1,
        name: '마법사주방',
        address: '서울 강남구 123456',
        menuItems: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
          { id: 2, restaurantId: 1, name: '짬뽕' },
        ],
      });
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
