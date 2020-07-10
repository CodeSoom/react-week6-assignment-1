import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import { useDispatch } from 'react-redux';

test('RestaurantDetailContainer', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render((
    <RestaurantDetailContainer />
  ));

  expect(dispatch).toBeCalled();

});