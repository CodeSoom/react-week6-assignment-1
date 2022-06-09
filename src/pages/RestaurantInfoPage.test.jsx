/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';
import categories from '../../fixtures/categories';
import regions from '../../fixtures/regions';
import restaurantInfo from '../../fixtures/restaurantInfo';

jest.mock('react-redux');
jest.mock('../services/api');

test('RestaurantInfoPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [],
      restaurant: restaurantInfo,
      categories,
      regions,
    })
  );

  const { getByText } = render(<RestaurantInfoPage />);

  expect(dispatch).toBeCalled();

  expect(getByText(/양천주가/)).not.toBeNull();
  expect(getByText(/서울 강남구 123456/)).not.toBeNull();
});
