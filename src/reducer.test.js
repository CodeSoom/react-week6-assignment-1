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
  const initialState = INITIAL_STATE;

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
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
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

      const state = reducer(initialState, setRestaurantDetails(restaurantDetails));

      expect(state.restaurantDetails).toEqual(restaurantDetails);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      initialState.regions = [{ id: 1, name: '서울' }];
      // 중복 코드를 제거하기 위해 이렇게 할당해주었는데 잘못된 방식일까요?
      // 상단에서 initialState를 정의하고 given.regions를 할당하는 방식으로 해보려고 했는데
      // 실패했습니다 ㅠㅠ

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });

      initialState.regions = [];
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      initialState.categories = [{ id: 1, name: '한식' }];

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });

      initialState.categories = [];
    });
  });
});
