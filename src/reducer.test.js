import { selectRegion, selectCategory } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

describe('reducer', () => {
  const REGION = regions[0];
  const CATEGORY = categories[0];
  context('when action type is selectRegion', () => {
    it('set selectedRegionId', () => {
      const previousState = {};
      const state = reducer(previousState, selectRegion(REGION.id));
      expect(state).toEqual({
        selectedRegionId: REGION.id,
      });
    });
  });
  context('when action type is selectCategory', () => {
    it('set selectedCategoryId', () => {
      const previousState = {};
      const state = reducer(previousState, selectCategory(CATEGORY.id));
      expect(state).toEqual({
        selectedCategoryId: CATEGORY.id,
      });
    });
  });
});
