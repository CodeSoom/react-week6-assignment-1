import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from 'react-redux';

import RestaurantDetailContainer from '../RestaurantDetailContainer';
import restaurantDetail from '../../../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  given('restaurant', () => restaurantDetail);

  const {
    name, address, menuItems, reviews, information,
  } = restaurantDetail;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));
  });

  context('with restaurant', () => {
    it('renders restaurant', () => {
      const {
        getByRole, getByText, getAllByRole,
      } = render(<RestaurantDetailContainer />);

      expect(getByRole('heading', { name })).toBeInTheDocument();
      expect(getByText(`주소 : ${address}`)).toBeInTheDocument();
      expect(getByText(`정보 : ${information}`)).toBeInTheDocument();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
      menuItems.forEach((menuItem) => {
        expect(getAllByRole('list')[0]).toHaveTextContent(menuItem.name);
      });

      expect(getByRole('heading', { name: '리뷰' })).toBeInTheDocument();
      reviews.forEach((review) => {
        expect(getAllByRole('list')[1]).toHaveTextContent(review.name);
      });
    });
  });

  context('without restaurant', () => {
    it('renders "텅~!"', () => {
      given('restaurant', () => null);

      const {
        getByRole,
      } = render(<RestaurantDetailContainer />);

      expect(getByRole('heading', { name: '텅~!' })).toBeInTheDocument();
    });
  });
});
