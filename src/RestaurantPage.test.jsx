import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
      menuItems: [
        { id: 16, restaurantId: 1, name: '탕수육' },
        { id: 17, restaurantId: 1, name: '팔보채' },
      ],
      information: '양천주가 in 서울 강남구',
    },
  }));

  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('양천주가')).toBeInTheDocument();
  expect(queryByText('주소: 서울 강남구')).toBeInTheDocument();
  expect(queryByText('탕수육')).toBeInTheDocument();
});
