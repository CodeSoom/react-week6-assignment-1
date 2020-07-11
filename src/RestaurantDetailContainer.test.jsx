import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail,
      }));
    });

    it('renders restaurant detail informations', () => {
      const { container } = render(
        <RestaurantDetailContainer
          restaurantId={restaurantDetail.id}
        />,
      );

      const { name, address, menuItems } = restaurantDetail;

      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(address);
      menuItems.forEach((menu) => {
        expect(container).toHaveTextContent(menu.name);
      });
    });
  });

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('renders loading', () => {
      const { container } = render(
        <RestaurantDetailContainer
          restaurantId={restaurantDetail.id}
        />,
      );

      expect(container).toHaveTextContent('Loading');
    });
  });
});
