import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        categoryId: 1,
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

  function renderRestaurantContainer() {
    return render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));
  }

  context('with restaurant', () => {
    it('renders restaurant name', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('양천주가');
    });

    it('renders restaurant adress', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('서울 강남구');
    });

    it('renders restaurant menus', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('without restaurant', () => {
    it('renders no restaurant message', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText(/Loading/)).not.toBeNull();
    });
  });
});
