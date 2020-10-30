import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {},
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).not.toBeNull();
});
