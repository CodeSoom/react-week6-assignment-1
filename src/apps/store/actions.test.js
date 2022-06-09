import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  setRestaurants,
  loadRestaurantDetail,
  setRestaurantDetail,
  setError,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setRegions and setCategories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('runs setRestaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
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

  describe('loadRestaurantDetail', () => {
    context('with selectedRestaurantId', () => {
      it('runs setRestaurantDetail', async () => {
        await store.dispatch(loadRestaurantDetail(1));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setRestaurantDetail({}));
      });
    });

    context('without selectedRestaurantId', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRestaurantId: null,
        });
      });

      it("doesn't run any actions", async () => {
        await store.dispatch(loadRestaurantDetail());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('with error', () => {
      beforeEach(() => {
        store = mockStore({
          restaurantDetail: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: {},
          },
        });
        window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('error')));
      });

      it('runs setError', async () => {
        await store.dispatch(loadRestaurantDetail(1));

        const actions = store.getActions();

        expect(actions).toEqual(setError('restaurantDetail', {
          isError: true,
          errorMessage: 'error',
        }));
      });
    });
  });
});
