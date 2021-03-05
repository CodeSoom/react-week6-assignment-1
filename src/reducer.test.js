import { selectRegion } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';

describe('reducer', () => {
  const REGION = regions[0];
  context('when action type is selectRegion', () => {
    it('set selectedRegionId', () => {
      const previousState = {};
      const state = reducer(previousState, selectRegion(REGION.id));
      expect(state).toEqual({
        selectedRegionId: REGION.id,
      });
    });
  });
});
