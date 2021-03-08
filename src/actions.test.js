import { selectRegion,
  setRegions,
  selectCategory,
  setCategories,
  setRestaurants,
  loadRestaurants
} from './actions';

import thunk from 'redux-thunk';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

import configureStore from 'redux-mock-store';
import RESTAURANTS from '../fixtures/restaurants';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

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
  describe('setRestaurants', () => {
    it('create setRestaurants action', () => {
      expect(setRestaurants(RESTAURANTS)).toEqual({
        type: 'setRestaurants',
        payload: {
          restaurants: RESTAURANTS,
        }
      });
    });
  });
  describe('loadRestaurants', () => {
    context('with restaurant and category', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: REGIONS[0] ,
          selectedCategory: CATEGORIES[0] ,
        });
      });
      it('call loadRestaurants action', async () => {
        await store.dispatch(loadRestaurants());
  
        const actions = store.getActions();
        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });
    context('without restaurant', () => {
      beforeEach(() => {
        store = mockStore({
          selectedCategory: CATEGORIES[0] ,
        });
      });
      it('not call loadRestaurants action', async () => {
        await store.dispatch(loadRestaurants());
  
        const actions = store.getActions();
        expect(actions).toHaveLength(0);
      });
    });
    context('without category', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: REGIONS[0] ,
        });
      });
      it('not call loadRestaurants action', async () => {
        await store.dispatch(loadRestaurants());
  
        const actions = store.getActions();
        expect(actions).toHaveLength(0);
      });
    });
  });


});
