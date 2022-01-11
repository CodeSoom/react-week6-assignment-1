import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';

import RESTAURANTINFO from '../../fixtures/restaurantInfo';

jest.mock('react-redux');

test('renders RestaurantInfoContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: RESTAURANTINFO,
  }));

  const { getByText } = render((<RestaurantInfoContainer />));

  expect(getByText(RESTAURANTINFO.name)).not.toBeNull();
  expect(getByText(RESTAURANTINFO.address)).not.toBeNull();
  expect(getByText(RESTAURANTINFO.menuItems[0].name)).not.toBeNull();
});
