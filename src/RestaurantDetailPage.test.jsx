import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  context('when param has restaurantID', () => {
    it('displays restaurant detail', () => {
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
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { getByText } = render((
        <RestaurantDetailPage
          match={{
            params: { restaurantId: restaurant.id },
          }}
        />
      ));

      expect(dispatch).toBeCalled();

      expect(getByText(/양천주가/)).not.toBeNull();
      expect(getByText(/서울 강남구/)).not.toBeNull();
      expect(getByText(/탕수육/)).not.toBeNull();
      expect(getByText(/팔보채/)).not.toBeNull();
    });
  });
});
