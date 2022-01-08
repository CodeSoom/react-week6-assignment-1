// @ts-check
import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetail from '../RestaurantDetail';
import restaurant from '../../../fixtures/restaurant';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useMatch: () => ({
    params: {
      id: 1,
    },
  }),
}));

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  it('레스토랑의 정보를 출력한다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantDetail />
      </MemoryRouter>
    ));

    expect(queryByText(restaurant.address)).not.toBeNull();
    expect(queryByText(restaurant.menuItems[0].name)).not.toBeNull();
    expect(queryByText(restaurant.name)).not.toBeNull();
  });
});
