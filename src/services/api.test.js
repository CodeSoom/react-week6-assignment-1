import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
} from './api';

import regionsMockData from '../../fixtures/regions';
import categoriesMockData from '../../fixtures/categories';
import restaurantsMockData from '../../fixtures/restaurants';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regionsMockData);
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(regionsMockData);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categoriesMockData);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(categoriesMockData);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurantsMockData);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(restaurants).toEqual(restaurantsMockData);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(restaurantsMockData);
    });

    it('returns restaurants', async () => {
      const restaurant = await fetchRestaurant({
        restaurantId: 1,
      });

      expect(restaurant).toEqual(restaurantsMockData);
    });
  });
});
