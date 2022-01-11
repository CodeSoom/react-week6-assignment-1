import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

test('RestaurantDetailContainer', () => {
  const restaurantId = 1;

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '양천주가',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, name: '비빔밥' },
      ],
    },
  }));

  const { getByText } = render(
    <RestaurantDetailContainer restaurantId={restaurantId} />,
  );

  expect(getByText(/양천주가/)).not.toBeNull();
  expect(getByText(/비빔밥/)).not.toBeNull();
});
