import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurant from '../fixtures/restaurant';

test('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ restaurant }));

  const { getByText } = render(
    <RestaurantDetailPage />,
  );

  expect(getByText(/양천주가/)).not.toBeNull();
  expect(getByText(/비빔밥/)).not.toBeNull();
});
