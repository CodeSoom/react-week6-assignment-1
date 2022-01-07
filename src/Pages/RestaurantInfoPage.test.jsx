import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

jest.mock('react-redux');

test('renders RestaurantInfoPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: {
      name: '양천주가',
      address: '서울 강남구 123456',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '비빔밥',
        },
      ],
    },
  }));

  const { getByText } = render((<RestaurantInfoPage />));

  expect(getByText('양천주가')).not.toBeNull();
  expect(getByText(/서울 강남구 123456/)).not.toBeNull();
  expect(getByText('비빔밥')).not.toBeNull();
});
