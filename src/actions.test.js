import { selectRegion } from './actions';

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
});
