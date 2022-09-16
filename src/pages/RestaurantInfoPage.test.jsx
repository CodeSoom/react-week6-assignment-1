import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

import { restaurantInfo as RESTAURANT_INFO } from '../../fixtures/restaurants';

test('RestaurantInfoPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: RESTAURANT_INFO,
  }));

  const { queryByText } = render((
    <RestaurantInfoPage />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('주소: 서울 강남구')).not.toBeNull();
});
