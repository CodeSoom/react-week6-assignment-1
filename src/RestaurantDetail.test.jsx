import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when there are restaurant detail', () => {
    it('display detail', () => {
      const restaurant = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          {
            id: 16,
            restaurantId: 1,
            name: '탕수육',
          },
          {
            id: 17,
            restaurantId: 1,
            name: '팔보채',
          },
        ],
      };

      const { container } = render((
        <RestaurantDetail
          restaurant={restaurant}
        />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구');
      expect(container).toHaveTextContent('탕수육');
      expect(container).toHaveTextContent('팔보채');
    });
  });

  context('when there no restaurant detail', () => {
    it('display loading', () => {
      const restaurant = null;

      const { container } = render((
        <RestaurantDetail
          restaurant={restaurant}
        />
      ));

      expect(container).toHaveTextContent(/레스토랑 상세 로딩중../);
    });
  });
});
