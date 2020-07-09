import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

test('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: {
      id: 1,
      name: '김밥제국',
      category: '한식',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, name: '김밥' },
      ],
    },
  }));

  const restaurantId = 1;

  const { container } = render(
    <RestaurantDetailContainer
      restaurantId={restaurantId}
    />,
  );

  expect(container).toHaveTextContent('김밥제국');
  expect(container).toHaveTextContent('서울시 강남구');
  expect(container).toHaveTextContent('김밥');
});
