import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantDetails,
} from './api';

import REGIONS from '../../fixtures/regions';
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

  describe('fetchRestaurantDetails', () => {
    // TODO: Refactor mock data
    const restaurantDetails = {
      id: 1,
      name: '양천주가',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, name: '탕수육' },
      ],
    };

    beforeEach(() => {
      mockFetch(restaurantDetails);
    });

    it('returns restaurants', async () => {
      // TODO: Modify name after refactoring mock data
      const fetched = await fetchRestaurantDetails(1);

      expect(fetched).toEqual(restaurantDetails);
    });
  });
});
