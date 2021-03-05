import { fetchRegions, setRegions } from './api';
import REGIONS from '../../fixtures/regions'

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(REGIONS);
    });
    it('returns regions', async() => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });
});