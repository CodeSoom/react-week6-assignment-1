import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetails from './RestaurantDetails';

import DETAILS from '../fixtures/details';

test('RestaurantDetails', () => {
  const { getByText } = render((
    <RestaurantDetails
      restaurantDetails={DETAILS}
    />
  ));

  expect(getByText('양천주가')).not.toBeNull();

  expect(getByText(/서울시 강남구/)).not.toBeNull();

  expect(getByText(/탕수육/)).not.toBeNull();
});
