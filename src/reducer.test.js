import { selectRegion, selectCategory, setCategories, setRegions, setRestaurants } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  const REGION = regions[0];
  const CATEGORY = categories[0];

  context('when action type is setCategories', () => {
    it('set setCategories', () => {
      const previousState = {};
      const state = reducer(previousState, setCategories(categories));
      expect(state.categories).toEqual(categories);
    });
  });

  context('when action type is setRegions', () => {
    it('set setRegions', () => {
      const previousState = {};
      const state = reducer(previousState, setRegions(regions));
      expect(state.regions).toEqual(regions);
    });
  });

  context('when action type is setRestaurants', () => {
    it('set setRestaurants', () => {
      const previousState = {};
      const state = reducer(previousState, setRestaurants(restaurants));
      expect(state.restaurants).toEqual(restaurants);
    });
  });

  context(`when action type doesn't existed `, () => {
    it('return previousState state', () => {
      const previousState = {};
      const state = reducer(previousState, {
        type: '??',
        payment: {}
      });
      expect(state).toEqual(previousState);
    });
  });
  context('when action type is selectRegion', () => {
    it('set selectedRegion', () => {
      const previousState = {
        regions
      };
      const state = reducer(previousState, selectRegion(REGION.id));
      expect(state.selectedRegion).toEqual(REGION);
    });
  });
  context('when action type is selectCategory', () => {
    it('set selectedCategory', () => {
      const previousState = {
        categories
      };
      const state = reducer(previousState, selectCategory(CATEGORY.id));
      expect(state.selectedCategory).toEqual(CATEGORY);
    });
  });
});
