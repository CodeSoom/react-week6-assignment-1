import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurant', () => {
    it('RestaurantContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          menuItems: [
            {
              id: 18,
              restaurantId: 6,
              name: '밥',
            },
          ],
        },
      }));

      const { container } = render((
        <RestaurantContainer />
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
