import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({}));

  useParams.mockImplementation(() => ({
    id: 1,
  }));

  render((
    <RestaurantDetailPage />
  ));

  expect(dispatch).toBeCalled();
});
