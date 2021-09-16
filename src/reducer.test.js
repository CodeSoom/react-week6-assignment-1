import given from 'given2';

import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  setRestaurantDetails,
} from './actions';

describe('reducer', () => {
  given('previousState', () => ({
    regions: given.regions,
    categories: given.categories,
    restaurants: [],
    selectedRegion: null,
    selectedCategory: null,
    restaurantDetails: null,
  }));

  given('regions', () => []);
  given('categories', () => []);

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(given.previousState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(given.previousState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(given.previousState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(given.previousState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurantDetails', () => {
    it('changes restaurant details', () => {
      const restaurantDetails = {
        id: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [
          { name: '비빔밥' },
        ],
      };

      const state = reducer(given.previousState, setRestaurantDetails(restaurantDetails));

      expect(state.restaurantDetails).toEqual(restaurantDetails);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      given('regions', () => [{ id: 1, name: '서울' }]);

      const state = reducer(given.previousState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      given('categories', () => [{ id: 1, name: '한식' }]);

      const state = reducer(given.previousState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
