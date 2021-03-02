import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DetailPage from './DetailPage';

test('DetailPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '양천주가',
      address: '서울시 강남구',
      menuItems: [{ id: 1, name: '비빔밥' }],
    },
  }));

  const { queryByText } = render((<DetailPage match={{ params: 1 }} />));

  expect(dispatch).toBeCalled();
  expect(queryByText(/양천주가/)).not.toBeNull();
  expect(queryByText(/주소: 서울시 강남구/)).not.toBeNull();
  expect(queryByText(/비빔밥/)).not.toBeNull();
});
