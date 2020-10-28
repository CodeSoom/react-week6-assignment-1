import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: {
        name: '양천 주가',
        address: '서울시 강남구',
        menuItems: [],
      },
    }));
  });

  context('with restaurant details', () => {
    it('renders restaurant details page', () => {
      const restaurantDetail = {
        name: '양천 주가',
        address: '서울시 강남구',
        menuItems: [],
      };

      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailsPage
            restaurant={restaurantDetail}
          />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('양천 주가');
    });
  });
});
