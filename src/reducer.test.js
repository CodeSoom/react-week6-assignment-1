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
      selectedRegion: null,
      selectedCategory: null,
      restaurantInfo: null,
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
          {
            id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
          },
        ],
        selectedRestaurant: null,
      };

      const state = reducer(initialState, selectRestaurant(1));

      expect(state.selectedRestaurant).toEqual({
        id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
      });
    });
  });

  describe('setRestaurantInfo', () => {
    it('changes restaurant info', () => {
      const initialState = {
        restaurantInfo: null,
      };

      const restaurantInfo = {
        id: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [
          {
            id: 1,
            restaurantId: 1,
            name: '비빔밥',
          },
        ],
      };

      const state = reducer(initialState, setRestaurantInfo(restaurantInfo));

      expect(state.restaurantInfo).toEqual(restaurantInfo);
    });
  });
});
