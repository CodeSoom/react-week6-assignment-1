import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantsDetail,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANTSDETAIL from '../../fixtures/restaurantsDetail';

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

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe('fetchRestaurantsDetail', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTSDETAIL);
    });

    it('returns restaurantsDetail', async () => {
      const restaurantsDetail = await fetchRestaurantsDetail({ restaurantsId: 1 });

      expect(restaurantsDetail).toEqual(RESTAURANTSDETAIL);
    });
  });
});
