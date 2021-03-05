import { selectRegion, setRegions } from './actions';
import REGIONS from '../fixtures/regions';

describe('Actions', () => {
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
});
