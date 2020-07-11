import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import DETAILS from '../fixtures/details';

test('RestaurantDetailsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetails: DETAILS,
  }));

  const { container } = render((
    <RestaurantDetailsContainer />
  ));

  const MENU_ITEM = DETAILS.menuItems[0];

  expect(container).toHaveTextContent(DETAILS.name);

  expect(container).toHaveTextContent(DETAILS.address);

  expect(container).toHaveTextContent(MENU_ITEM.name);
});
