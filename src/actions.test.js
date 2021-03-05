import { selectRegion, setRegions, selectCategory, setCategories, } from './actions';
import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

import configureStore from 'redux-mock-store';
import { configure } from '@testing-library/react';

const mockStore = configureStore([]);

describe('Actions', () => {
  let store;
  describe('selectRegion', () => {
    it('create selectRegion Action', () => {
      expect(selectRegion(1)).toEqual({
        type: 'selectRegion',
        payload: {
          id:1,
        },
      });
    });
  });
  describe('setRegions', () => {
    it('create setRegions action', () => {
      expect(setRegions(REGIONS)).toEqual({
        type: 'setRegions',
        payload: {
          regions: REGIONS,
        }
      });
    });
  });
  describe('selectCategory', () => {
    it('create selectCategory Action', () => {
      expect(selectCategory(1)).toEqual({
        type: 'selectCategory',
        payload: {
          id:1,
        },
      });
    });
  });
  describe('setCategories', () => {
    it('create setCategories action', () => {
      expect(setCategories(CATEGORIES)).toEqual({
        type: 'setCategories',
        payload: {
          categories: CATEGORIES,
        }
      });
    });
  });
  // describe('loadRegions', () => {
  //   beforeEach(() => {
  //     store = mockStore({});
  //   });
  //   it('create loadRegions action', async () => {
  //     await store.dispatch(loadRegions);

  //     const actions = store.getActions();
  //     expect(actions[0]).toEqual(setRegions([]));
  //   });
  // });
});
