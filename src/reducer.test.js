import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  selectRestaurant,
  setLoading,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: {},
      selectedRegion: null,
      selectedCategory: null,
      selectedRestaurant: null,
      loading: false,
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

  describe('setRestaurant', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        menuItems: [
          {
            id: 18,
            restaurantId: 6,
            name: '밥',
          },
        ],
      };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant).toEqual({
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        menuItems: [
          {
            id: 18,
            restaurantId: 6,
            name: '밥',
          },
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

  describe('selectRestaurant', () => {
    it('changes selected restaurant', () => {
      const initialState = {
        restaurants: [
          {
            id: 6, name: '한국식 초밥', category: '한식', address: '서울 강남구',
          },
        ],
        selectedRestaurant: null,
      };

      const state = reducer(initialState, selectRestaurant(6));

      expect(state.selectedRestaurant).toEqual({
        id: 6, name: '한국식 초밥', category: '한식', address: '서울 강남구',
      });
    });
  });

  describe('setLoading', () => {
    it('changes loading status', () => {
      const initialState = {
        loading: false,
      };

      const state = reducer(initialState, setLoading(false));

      expect(state.loading).toBeFalsy();
    });
  });
});
