import {
  fetchRegions, fetchCategories, fetchRestaurants, fetchRestaurantInfo,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

const RESTAURANTINFO = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구 123456',
  menuItems: [
    {
      id: 1,
      restaurantId: 1,
      name: '비빔밥',
    },
  ],
  reviews: [
    {
      id: 1,
      restaurantId: 1,
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
  ],
};

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

  describe('fetchRestaurantInfo', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTINFO);
    });
    it('returns restaurantInfo', async () => {
      const restaurantInfo = await fetchRestaurantInfo({
        restaurantId: 1,
      });
      expect(restaurantInfo).toEqual(RESTAURANTINFO);
    });
  });
});
