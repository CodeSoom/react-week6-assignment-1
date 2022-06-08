import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  selectRestaurant,
  setRestaurantInfo,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurantInfo: {},
      selectedRegion: null,
      selectedCategory: null,
      selectedRestaurant: null,
      restaurantInfoLoading: false,
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

  describe('setRestaurantInfo', () => {
    it('changes restaurant information', () => {
      const initialState = {
        restaurantInfo: {},
      };

      const restaurantInfo = {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        menuItems: [
          { id: 1, restarantId: 1, name: '비빔밥' },
        ],
      };

      const state = reducer(initialState, setRestaurantInfo(restaurantInfo));

      expect(state.restaurantInfo.name).toBe('마법사주방');
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

  describe('selectRestaurant', () => {
    it('changes selected restaurant', () => {
      const initialState = {
        restaurants: [
          { id: 1, name: '양천주가' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectRestaurant(1));

      expect(state.selectedRestaurant).toEqual({
        id: 1,
      });
    });
  });
});
