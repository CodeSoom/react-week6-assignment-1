import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import { mockRestaurant as restaurant } from './fixture/mockData';

describe('RestaurantDetail', () => {
  const {
    name, address, menuItems, reviews, information,
  } = restaurant;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  it('renders RestaurantDetail', () => {
    const {
      getByRole, getByText, getAllByRole,
    } = render(
      <RestaurantDetailContainer />,
    );

    expect(getByRole('heading', { name })).toBeInTheDocument();
    expect(getByText(address)).toBeInTheDocument();
    expect(getByText(information)).toBeInTheDocument();

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
