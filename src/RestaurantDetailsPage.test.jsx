import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

test('RestaurantDetailsPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetails: {
      id: 1,
      name: '양천주가',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, name: '탕수육' },
      ],
    },
  }));

  const { getByText } = render((
    <RestaurantDetailsPage />
  ));

  expect(getByText('양천주가')).not.toBeNull();

  expect(getByText(/서울시 강남구/)).not.toBeNull();

  expect(getByText(/탕수육/)).not.toBeNull();
});
