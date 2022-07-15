import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setLoading,
} from './actions';

import {
  loadInitialData,
  loadRestaurants,
  loadRestaurant,
} from './async-actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('async-actions', () => {
  let store;

  const expectToDispatchSetLoadings = (actions) => {
    expect(actions[0]).toEqual(setLoading(true));
    expect(actions[actions.length - 1]).toEqual(setLoading(false));
  };

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setRegions and setCategories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[1]).toEqual(setRegions([]));
      expect(actions[2]).toEqual(setCategories([]));
    });

    it('runs setLoading first and last', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expectToDispatchSetLoadings(actions);
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

        expect(actions[1]).toEqual(setRestaurants([]));
      });

      it('runs setLoading first and last', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expectToDispatchSetLoadings(actions);
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
      store = mockStore();
    });

    context('with restaurant id', () => {
      it('runs setRestaurant', async () => {
        await store.dispatch(loadRestaurant({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setRestaurant(null));
      });

      it('runs setLoading first and last', async () => {
        await store.dispatch(loadRestaurant({ restaurantId: 1 }));

        const actions = store.getActions();

        expectToDispatchSetLoadings(actions);
      });
    });

    context('without restaurant id', () => {
      it('does\'nt run any actions', async () => {
        await store.dispatch(loadRestaurant());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
