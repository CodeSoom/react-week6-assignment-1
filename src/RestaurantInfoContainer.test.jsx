import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';

describe('RestaurantInfoContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedRestaurantInfo: {
      id: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      menuItems: [
        {
          id: 1,
          restaurantId: 1,
          name: '비빔밥',
        },
      ],
    },
  }));

  it('renders restaurant information', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantInfoContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
