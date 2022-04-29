import given from 'given2';

import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurantDetail,
  selectRegion,
  selectCategory,
} from './actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
    restaurantDetail: null,
    selectedRegion: null,
    selectedCategory: null,
    selectedRestaurant: null,
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
        { id: 2, name: '부산' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(2);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '양식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurantDetail', () => {
    it('changes restaurantDetail', () => {
      const restaurantDetail = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          {
            id: 1,
            retaurantId: 1,
            name: '탕수육',
          },
        ],
      };

      const state = reducer(initialState, setRestaurantDetail(restaurantDetail));

      expect(state.restaurantDetail.id).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      given('initialState', () => ({
        regions: [
          { id: 1, name: '서울' },
        ],
        categories: [],
        restaurants: [],
        restaurantDetail: {},
        selectedRegion: null,
        selectedCategory: null,
        selectedRestaurant: null,
      }));

      const state = reducer(given.initialState, selectRegion({ id: 1 }));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      given('initialState', () => ({
        regions: [],
        categories: [
          { id: 1, name: '한식' },
        ],
        restaurants: [],
        restaurantDetail: {},
        selectedRegion: null,
        selectedCategory: null,
        selectedRestaurant: null,
      }));

      const state = reducer(given.initialState, selectCategory({ id: 1 }));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
