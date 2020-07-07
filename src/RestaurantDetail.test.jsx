import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantDetail', () => {
  const { getByText } = render((
    <RestaurantDetail restaurant={RESTAURANT} />
  ));

  expect(getByText('양천주가')).not.toBeNull();
  expect(getByText('서울 강남구')).not.toBeNull();
  expect(getByText('탕수육')).not.toBeNull();
  expect(getByText('팔보채')).not.toBeNull();
});
