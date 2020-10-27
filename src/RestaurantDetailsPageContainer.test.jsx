import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: {
        name: '양천 주가',
        address: '서울시 강남구',
        menuItems: [],
      },
    }));
  });

  context('with restaurant details', () => {
    it('renders restaurant details page', () => {
      const restaurantDetails = {
        name: '양천 주가',
        address: '서울시 강남구',
        menuItems: [],
      };

      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailsPage
            name={restaurantDetails.name}
            address={restaurantDetails.address}
            menuItems={restaurantDetails.menuItems}
          />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('양천 주가');
    });
  });
});
