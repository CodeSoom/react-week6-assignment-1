import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurantInfo,
} from './api';

jest.mock('./api');

describe('fetchCategories', () => {
  it('returns fetched categories', async () => {
    fetchCategories.mockImplementation(
      async () => [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ],
    );
    const categories = await fetchCategories();

    categories.forEach((category) => {
      expect(category).toMatchObject({
        id: expect.anything(),
        name: expect.anything(),
      });
    });
  });
});

describe('fetchRegions', () => {
  it('returns fetched regions', async () => {
    fetchRegions.mockImplementation(
      async () => [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
      ],
    );

    const regions = await fetchRegions();

    regions.forEach((region) => {
      expect(region).toMatchObject({
        id: expect.anything(),
        name: expect.anything(),
      });
    });
  });
});

describe('fetchRestuarants', () => {
  beforeAll(() => {
    fetchRestaurants.mockImplementation(
      async (regionName, categoryId) => {
        if ([regionName, categoryId].includes(null)) {
          return [];
        }

        return [{ id: 1, name: '양천주가' }];
      },
    );
  });

  context('when both category and region is selected', () => {
    it('returns fetched restuarants', async () => {
      const restuarants = await fetchRestaurants('서울', 1);

      restuarants.forEach((restaurant) => {
        expect(restaurant).toMatchObject({
          id: expect.anything(),
          name: expect.anything(),
        });
      });
    });
  });

  context('when something is unselected', () => {
    it('returns empty array of restuarants', async () => {
      const data = await fetchRestaurants(null, 1);

      expect(data).toEqual([]);
    });
  });
});

describe('fetch restaurantInfo', () => {
  beforeAll(() => {
    fetchRestaurantInfo.mockImplementation(async (id) => {
      if (id < 0) {
        return [];
      }

      const info = {
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
          {
            id: 2,
            restaurantId: 1,
            name: '짬뽕',
          },
        ],
      };

      const { name, address, menuItems } = info;

      return {
        name,
        address,
        menuItems: menuItems.map((item) => item.name),
      };
    });
  });

  context('with invalid restaurant id', () => {
    it('returns info object of single restaurant by id', async () => {
      const data = await fetchRestaurantInfo(-999);

      expect(data).toEqual([]);
    });
  });

  context('with vaild restaurant id', () => {
    it('returns info object of single restaurant by id', async () => {
      const data = await fetchRestaurantInfo(1);

      expect(data).toEqual({
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: ['비빔밥', '짬뽕'],
      });
    });
  });
});
