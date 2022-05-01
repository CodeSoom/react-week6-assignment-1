import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import given from 'given2';
import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  getRestaurant,
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
    given('store', () => mockStore({}));

    it('runs setRegions and setCategories', async () => {
      await given.store.dispatch(loadInitialData());

      const actions = given.store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      given('store', () => mockStore({
        selectedRegion: { id: 1, name: '서울' },
        selectedCategory: { id: 1, name: '한식' },
      }));

      it('runs setRestaurants', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context('without selectedRegion', () => {
      given('store', () => mockStore({
        selectedCategory: { id: 1, name: '한식' },
      }));

      it('does\'nt run any actions', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      given('store', () => mockStore({
        selectedRegion: { id: 1, name: '서울' },
      }));

      it('does\'nt run any actions', async () => {
        await given.store.dispatch(loadRestaurants());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('loadRestaurant', () => {
    context('with selecte restaurant', () => {
      given('store', () => mockStore({}));

      it('runs fetch restaurant and setRestaurant', async () => {
        await given.store.dispatch(loadRestaurant(1));

        const actions = given.store.getActions();

        expect(actions).toEqual([
          getRestaurant(),
          setRestaurant({}),
        ]);
      });
    });

    context('without selecte restaurant', () => {
      given('store', () => mockStore({}));

      it('runs fetch restaurant and setRestaurant', async () => {
        await given.store.dispatch(loadRestaurant());

        const actions = given.store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
