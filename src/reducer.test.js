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
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurantDetail: null,
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

  describe('setRestaurantDetail', () => {
    it('changes restaurantDetail', () => {
      const initialState = {
        restaurantDetail: null,
      };

      const restaurantDetail = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울시 강남구',
        menuItems: [{
          id: 1,
          restaurantId: 1,
          name: '비빔밥',
        }],
        reviews: [{
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다',
        }],
        information: '양천주가 in 서울 강남구',
      };

      const state = reducer(initialState, setRestaurantDetail(restaurantDetail));

      expect(state.restaurantDetail).not.toBeNull();
    });
  });
});
