import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

describe('RestaurantInfoPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurantInfo: {
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
  });

  it('renders restaurant information page', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantInfoPage />
      </MemoryRouter>

    ));

    expect(container).toHaveTextContent('Restaurant Information');
  });
});
