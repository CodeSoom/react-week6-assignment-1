import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantInfo,
} from './api';

import REGIONS from '../../__fixtures__/regions';
import CATEGORIES from '../../__fixtures__/categories';
import {
  restaurants as RESTAURANTS,
  restaurantInfo as RESTAURANT_INFO,
} from '../../__fixtures__/restaurants';

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

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT_INFO);
    });

    it('returns restaurantInfo', async () => {
      const restaurantInfo = await fetchRestaurantInfo({
        restaurantId: 1,
      });

      expect(restaurantInfo).toEqual(RESTAURANT_INFO);
    });
  });
});
