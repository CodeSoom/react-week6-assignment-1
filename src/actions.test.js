import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import given from 'given2';
import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  setRestaurants,
  loadRestaurant,
  setRestaurant,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  beforeEach(() => {
    given('store', () => mockStore({}));
  });

  describe('loadInitialData', () => {
    beforeEach(() => {
      given('store', () => mockStore({}));
    });

    it('runs setRegions and setCategories', async () => {
      await given.store.dispatch(loadInitialData());

      const actions = given.store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        given('store', () => mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        }));
      });

      it('runs setRestaurants', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context('without selectedRegion', () => {
      beforeEach(() => {
        given('store', () => mockStore({
          selectedCategory: { id: 1, name: '한식' },
        }));
      });

      it('does\'nt run any actions', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        given('store', () => mockStore({
          selectedRegion: { id: 1, name: '서울' },
        }));
      });

      it('does\'nt run any actions', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('loadRestaurant', () => {
    context('with selecte restaurant', () => {
      beforeEach(() => {
        given('store', () => mockStore({
          selectedRestaurant: {
            id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
          },
        }));
      });

      it('run fetch restaurant and setRestaurant', async () => {
        await given.store.dispatch(loadRestaurant());

        const actions = given.store.getActions();

        expect(actions).toEqual([setRestaurant({})]);
      });
    });

    context('without selecte restaurant', () => {
      beforeEach(() => {
        given('store', () => mockStore({}));
      });

      it('run fetch restaurant and setRestaurant', async () => {
        await given.store.dispatch(loadRestaurant());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
