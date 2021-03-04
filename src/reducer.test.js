import { selectRegion } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('when action type is selectRegion', () => {
    it('set selectedRegionId', () => {
      const previousState = {};
      const state = reducer(previousState, selectRegion(1));
      expect(state).toEqual({
        selectedRegionId: 1,
      });
    });
  });
});
