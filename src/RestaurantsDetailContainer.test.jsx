import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

test('RestaurantsDetailContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: null,
      name: null,
      address: null,
      menuItems: [],
    },
  }));

  const { container } = render((
    <RestaurantsDetailContainer />
  ));

  expect(container).not.toBeNull();
});
