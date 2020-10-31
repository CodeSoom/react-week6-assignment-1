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

  it('render restaurant', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);
  });

  it('call loadRestaurant action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });
});
