import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';

describe('RestaurantInfoContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurantInfo', () => {
    it('renders restaurant information', () => {
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

      const { container } = render((
        <MemoryRouter>
          <RestaurantInfoContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('without restaurantInfo', () => {
    it('renders "no data" message', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: null,
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantInfoContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('데이터가 없습니다.');
    });
  });
});
