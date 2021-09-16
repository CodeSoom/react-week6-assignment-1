import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RestaurantDetailsPage from './RestaurantDetailsPage';

test('RestaurantDetailsPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const match = { params: { id: 1 } };
  render((
    <RestaurantDetailsPage match={match} />
  ));

  expect(dispatch).toBeCalled();
});
