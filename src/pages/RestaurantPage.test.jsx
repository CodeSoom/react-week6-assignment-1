import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  it('renders title, menus, reviews', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '양천주가',
        menuItems: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
        ],
        reviews: [
          {
            id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
          },
        ],
      },
    }));

    render(
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>,
    );

    expect(dispatch).toBeCalled();

    expect(screen.queryByText('양천주가')).not.toBeNull();
    expect(screen.queryByText('비빔밥')).not.toBeNull();
    expect(screen.queryByText(/테스터/)).not.toBeNull();
    expect(screen.queryByText(/훌륭하다 훌륭하다 지구인놈들/)).not.toBeNull();
  });
});
