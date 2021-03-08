import { fetchRegions, fetchRestaurants } from './api';
import REGIONS from '../../fixtures/regions'
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

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

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });
    it('returns categories', async() => {
      const categories = await fetchRegions();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    const regionName = REGIONS[0].name;
    const categoryId = CATEGORIES[0].id;
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });
    it('returns restaurants', async() => {
      const restaurants = await fetchRestaurants({ regionName, categoryId });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });
});