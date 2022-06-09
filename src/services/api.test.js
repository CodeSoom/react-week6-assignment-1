import {
  fetchRegions, fetchCategories, fetchRestaurants, fetchRestaurantsDetails,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANTS_DETAILS from '../../fixtures/restaurantsDetails';

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
  describe('fetchRestaurantsDetails', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS_DETAILS);
    });
    it('식당 정보를 리턴한다', async () => {
      const datails = await fetchRestaurantsDetails({
        id: 1,
        name: '양천주가',
        address: '서울 강남구',
        menus: [
          { id: 101, name: '짜장면' },
          { id: 102, name: '짬뽕' },
        ],
      });

      expect(datails).toEqual(RESTAURANTS_DETAILS);
    });
  });
});
