import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  context('param에 restaurantId가 있으면', () => {
    it('숫자인 경우 레스토랑 페이지를 띄운다', () => {
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

      const { queryByText } = render((
        <RestaurantDetailPage
          match={{
            params: { restaurantId: restaurant.id }, isExact: true, path: '', url: '',
          }}
        />
      ));

      expect(dispatch).toBeCalled();

      expect(queryByText(/양천주가/)).not.toBeNull();
      expect(queryByText(/서울 강남구/)).not.toBeNull();
      expect(queryByText(/탕수육/)).not.toBeNull();
      expect(queryByText(/팔보채/)).not.toBeNull();
    });
  });

  context('param에 restarauntId가 잘못된 값이 있으면', () => {
    it('에러 페이지를 띄운다', () => {
      const restaurant = {};
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { queryByText } = render((
        <RestaurantDetailPage
          match={{
            params: { restaurantId: 'hello' }, isExact: true, path: '', url: '',
          }}
        />
      ));

      expect(dispatch).not.toBeCalled();

      expect(queryByText(/잘못된 접근입니다!/)).not.toBeNull();
    });
  });
});
