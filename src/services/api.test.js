import {
  fetchRegions, fetchCategories, fetchRestaurants, fetchRestaurant,
} from './api';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';
import restaurant from '../../fixtures/restaurant';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regions);
    });

    it('returns regions', async () => {
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categories);
    });

    it('returns categories', async () => {
      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurants);
    });

    it('returns restaurants', async () => {
      const data = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).toEqual(restaurants);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(restaurant);
    });

    it('returns restaurants', async () => {
      const data = await fetchRestaurant({
        restaurantId: 1,
      });

      expect(data).toEqual(restaurant);
    });
  });
});
