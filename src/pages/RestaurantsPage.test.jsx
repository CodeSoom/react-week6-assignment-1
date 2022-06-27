/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';
import categories from '../../fixtures/categories';
import regions from '../../fixtures/regions';

jest.mock('react-redux');
jest.mock('../services/api');

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [],
      restaurant: {},
      categories,
      regions,
    })
  );

  const { getByText } = render(<RestaurantsPage />);

  expect(dispatch).toBeCalled();

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울/)).not.toBeNull();
});
