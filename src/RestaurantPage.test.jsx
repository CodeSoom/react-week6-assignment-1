import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const name = '양천주가';
  const address = '서울 강남구 123456';
  const menuItems = [
    {
      id: 1,
      restaurantId: 1,
      name: '비빔밥',
    },
  ];
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      categoryId: 1,
      name,
      address,
      menuItems,
    },
  }));
  const { getByText } = render((
    <RestaurantPage />
  ));
  expect(getByText('양천주가')).not.toBeNull();
  expect(getByText('주소: 서울 강남구 123456')).not.toBeNull();
  expect(getByText('메뉴')).not.toBeNull();
  expect(getByText('비빔밥')).not.toBeNull();
});
