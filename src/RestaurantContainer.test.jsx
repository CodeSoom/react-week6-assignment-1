import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';
import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('call loadRestaurant action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });
});
