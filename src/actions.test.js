import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  setRestaurants,
  loadRestaurantsDetails,
  setRestaurantsDetails,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  describe('loadInitialData', () => {
    const store = mockStore({});

    it('runs setRegions and setCategories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      const store = mockStore({
        selectedRegion: { id: 1, name: '서울' },
        selectedCategory: { id: 1, name: '한식' },
      });

      it('runs setRestaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context('without selectedRegion', () => {
      const store = mockStore({
        selectedCategory: { id: 1, name: '한식' },
      });

      it("does'nt run any actions", async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      const store = mockStore({
        selectedRegion: { id: 1, name: '서울' },
      });

      it("does'nt run any actions", async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
  describe('loadRestaurantsDetails', () => {
    it('식당 정보를 가져온다.', async () => {
      const store = mockStore({});
      await store.dispatch(loadRestaurantsDetails());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantsDetails([]));
    });
  });
});
