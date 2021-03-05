import { selectRegion, selectCategory } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

describe('reducer', () => {
  const REGION = regions[0];
  const CATEGORY = categories[0];
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
