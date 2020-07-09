import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '양천주가' },
    ],
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText('양천주가')).not.toBeNull();

  fireEvent.click(getByText(/양천주가/));

  expect(dispatch).toBeCalledTimes(2);
});
