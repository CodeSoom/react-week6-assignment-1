import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

const customRender = () => render((
  <MemoryRouter>
    <RestaurantPage />
  </MemoryRouter>
));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          menuItems: [
            {
              id: 18,
              restaurantId: 6,
              name: '밥',
            },
          ],
        },
      ],
      selectedRestaurant: {},
      restaurant: {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        menuItems: [
          {
            id: 18,
            restaurantId: 6,
            name: '밥',
          },
        ],
      },
    }));
  });

  context('with a restaurant', () => {
    it('shows detailed info of the restaurant', () => {
      const { queryByText } = customRender('/restaurant');

      expect(queryByText('한국식 초밥')).not.toBeNull();
      expect(queryByText('주소:서울 강남구')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('밥')).not.toBeNull();
    });
  });
});
