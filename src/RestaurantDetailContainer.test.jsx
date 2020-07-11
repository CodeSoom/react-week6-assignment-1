import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

describe('RestaurantDetailContainer', () => {
  context('레스토랑 값이 있는 경우', () => {
    it('레스토랑 정보를 화면에 출력한다', () => {
      const restaurant = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
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
      };

      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { getByText } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(getByText(/양천주가/)).not.toBeNull();
      expect(getByText(/서울 강남구/)).not.toBeNull();
      expect(getByText(/탕수육/)).not.toBeNull();
      expect(getByText(/팔보채/)).not.toBeNull();
    });
  });

  context('레스토랑 값이 화면에 없는 경우', () => {
    it('로딩 화면을 출력한다', () => {
      const restaurant = null;

      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('continue loading...');
    });
  });
});
