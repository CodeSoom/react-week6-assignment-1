import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

test('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantDetail,
  }));

  const { container } = render(
    <RestaurantDetailContainer
      restaurantId={restaurantDetail.id}
    />,
  );

  const { name, address, menuItems } = restaurantDetail;

  expect(container).toHaveTextContent(name);
  expect(container).toHaveTextContent(address);
  menuItems.forEach((menu) => {
    expect(container).toHaveTextContent(menu.name);
  });
});
