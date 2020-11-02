import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';
import RESTAURANT_DETAIL from '../../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selectedRestaurant: RESTAURANT_DETAIL,
  }));

  it('renders restaurant detail', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantDetailPage match={{ params: 1 }} />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalledTimes(1);

    expect(container).toHaveTextContent(RESTAURANT_DETAIL.name);
  });
});
