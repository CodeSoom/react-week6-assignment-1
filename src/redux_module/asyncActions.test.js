import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { loadCategories, loadRegions, loadRestaurants } from './asyncActions';
import { setCategories, setRegions, setSelectedRestaurants } from './RestaurantSlice';
import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

jest.mock('../services/api');

describe('asyncActions', () => {
  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe('loadCategories', () => {
    beforeAll(() => {
      fetchCategories.mockImplementation(async () => [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ]);
    });

    it('fetches categories when being dispatched', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();
      expect(actions[0]).toEqual(setCategories([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ]));
    });
  });

  describe('loadRegions', () => {
    beforeAll(() => {
      fetchRegions.mockImplementation(
        async () => [
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
        ],
      );
    });

    it('fetches regions when being dispatched', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
      ]));
    });
  });

  describe('loadRestaurants', () => {
    beforeAll(() => {
      fetchRestaurants.mockImplementation(async () => ['양천주가', '한국식 초밥']);
    });

    it('fetches restuarants when being dispatched', async () => {
      await store.dispatch(loadRestaurants('서울', 1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSelectedRestaurants([
        '양천주가',
        '한국식 초밥',
      ]));
    });
  });
});
