import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const renderRestaurantContainer = () => render((
    <MemoryRouter>
      <RestaurantContainer />
    </MemoryRouter>
  ));

  context('without restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({}));
    });

    it('renders loading page', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구',
          menuItems: [
            { id: 16, restaurantId: 1, name: '탕수육' },
            { id: 17, restaurantId: 1, name: '팔보채' },
          ],
          information: '양천주가 in 서울 강남구',
        },
      }));
    });
    it('renders restaurant', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구');
    });
  });
});
