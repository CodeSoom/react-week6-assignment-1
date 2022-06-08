/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('../services/api');

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [],
      restaurant: {},
      categories: [],
      regions: [],
    })
  );

  const { queryByText } = render(<RestaurantsPage />);

  expect(dispatch).toBeCalledTimes(1);

  expect(queryByText(/김밥제국/)).toBeNull();
});
