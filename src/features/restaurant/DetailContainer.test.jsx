import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DetailContainer from './DetailContainer';

test('DetailContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '탕수육',
        },
      ],
    },
  }));

  const { queryByText } = render((
    <DetailContainer />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('탕수육')).not.toBeNull();
});
