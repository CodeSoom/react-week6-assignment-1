import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import DETAILS from '../fixtures/details';

test('RestaurantDetails', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetails: DETAILS,
  }));

  const { getByText } = render((
    <RestaurantDetailsContainer />
  ));

  expect(getByText('양천주가')).not.toBeNull();

  expect(getByText(/서울시 강남구/)).not.toBeNull();

  expect(getByText(/탕수육/)).not.toBeNull();
});
