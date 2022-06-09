import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurantDetail,
  setLoading,
  setError,
  selectRegion,
  selectCategory,
} from './actions';

describe('reducer', () => {
  context('default reducer', () => {
    it('returns initialState', () => {
      const initialState = {
        regions: [],
        categories: [],
        restaurants: [],
        restaurantDetail: {},
        selectedRegion: null,
        selectedCategory: null,
        isLoading: false,
        isError: false,
        errorMessage: '',
      };
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurantDetail: {},
      selectedRegion: null,
      selectedCategory: null,
      isLoading: false,
      isError: false,
      errorMessage: '',
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

  describe('setRestaurantDetail', () => {
    it('changes restaurantDetail', () => {
      const initialState = {
        restaurantDetail: {},
      };

      const restaurantDetail = {
        id: 1,
        categoryId: 1,
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

      const state = reducer(initialState, setRestaurantDetail(restaurantDetail));

      expect(state.restaurantDetail.name).toBe('양천주가');
    });
  });

  describe('setLoading', () => {
    it('isError becomes false and errorMessage becomes empty value and changes isLoading', () => {
      const initialState = {
        isLoading: false,
        isError: false,
        errorMessage: '',
      };

      const state = reducer(initialState, setLoading(true));

      expect(state.isLoading).toBe(true);
    });
  });

  describe('setError', () => {
    it('isLoading becomes false and changes isError and errorMessage', () => {
      const initialState = {
        isLoading: true,
        isError: false,
        errorMessage: '',
      };

      const state = reducer(initialState, setError({
        isError: true,
        errorMessage: '에러발생',
      }));

      expect(state.isLoading).toBe(false);
      expect(state.isError).toBe(true);
      expect(state.errorMessage).toBe('에러발생');
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
