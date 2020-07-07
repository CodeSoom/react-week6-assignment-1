import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');

test('RestaurantDetailContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    retaurant: RESTAURANT,
  }));

  const { getByText } = render((
    <RestaurantDetailContainer />
  ));

  expect(getByText('양천주가')).not.toBeNull();
});
