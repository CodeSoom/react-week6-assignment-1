import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import restaurant from '../fixtures/restaurant';

jest.mock('react-router-dom', () => ({
  useMatch: jest.fn(() => ({
    params: {
      id: '1',
    },
  })),
}));

test('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  const { queryByText } = render((
    <RestaurantDetailContainer />
  ));

  expect(queryByText(restaurant.name)).not.toBeNull();
  expect(queryByText(restaurant.address)).not.toBeNull();
  expect(queryByText(restaurant.menuItems[0].name)).not.toBeNull();
});
