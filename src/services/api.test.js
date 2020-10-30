import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
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
      const fetchedRegions = await fetchRegions();

      expect(fetchedRegions).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categories);
    });

    it('returns categories', async () => {
      const fetchedCategories = await fetchCategories();

      expect(fetchedCategories).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurants);
    });

    it('returns restaurants', async () => {
      const fetchedRestaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(fetchedRestaurants).toEqual(restaurants);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(restaurant);
    });

    it('returns restaurant info', async () => {
      const fetchedRestaurant = await fetchRestaurant(1);

      expect(fetchedRestaurant).toEqual(restaurant);
    });
  });
});
