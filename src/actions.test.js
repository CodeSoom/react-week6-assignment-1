import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  setRestaurant,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
} from './actions';

import RESTAURANT from '../fixtures/restaurant';
import RESTAURANTS from '../fixtures/restaurants';
import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

import {
  fetchRegions, fetchCategories, fetchRestaurant, fetchRestaurants,
} from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  let store;

  describe('loadInitialData', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(REGIONS);
      fetchCategories.mockResolvedValue(CATEGORIES);

      store = mockStore({});
    });

    it('runs setRegions and setCategories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(REGIONS));
      expect(actions[1]).toEqual(setCategories(CATEGORIES));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        fetchRestaurants.mockResolvedValue(RESTAURANTS);

        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('runs setRestaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(RESTAURANTS));
      });
    });

    context('without selectedRegion', () => {
      beforeEach(() => {
        store = mockStore({
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
        });
      });

      it('does\'nt run any actions', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('loadRestaurant', () => {
    beforeEach(() => {
      fetchRestaurant.mockResolvedValue(RESTAURANT);

      store = mockStore({
        restaurant: RESTAURANT,
      });
    });

    it('run setRestaurant', async () => {
      await store.dispatch(loadRestaurant());

      const actions = store.getActions();

      expect(actions).toEqual([
        setRestaurant({}),
        setRestaurant(RESTAURANT),
      ]);
    });
  });
});
