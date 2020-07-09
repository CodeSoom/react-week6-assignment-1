import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
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

  describe('fetchRestaurant', () => {
    const RESTAURANT = {
      id: 1,
      categoryId: 1,
      name: '김밥제국',
      category: '분식',
      address: '서울시 강남구 역삼동',
      menuItems: [
        {
          id: 1,
          name: '김밥',
        },
      ],
    };

    beforeEach(() => {
      mockFetch(RESTAURANT);
    });

    it('returns restaurant', async () => {
      const restaurant = await fetchRestaurant({
        restaurantId: 1,
      });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });
});
