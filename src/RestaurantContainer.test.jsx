import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.mock();

  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  function renderRestaurantContainer() {
    return render((
      <RestaurantsContainer />
    ));
  }
  beforeEach(() => {
    dispatch.mockClear();
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('render restaurant', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toBe(restaurant.name);
    expect(container).toBe(restaurant.address);
  });

  it('call loadRestaurant action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });
});
