import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RestaurantsDetail from './RestaurantsDetail';

describe('RestaurantsDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedRestaurant: {
        id: 1,
        name: '홍콩반점',
        menuItems: [
          {
            id: 16,
            restaurantId: 1,
            name: '탕수육',
          },
          {
            id: 17,
            restaurantId: 1,
            name: '팔보채',
          },
        ],
      },
    }));
  });

  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/restaurants/10']}>
        <RestaurantsDetail />
      </MemoryRouter>,
    );

    expect(getByText(/홍콩반점/)).not.toBeNull();
  });
});
