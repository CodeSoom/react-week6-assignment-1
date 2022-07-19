import React from 'react';

import { render } from '@testing-library/react';

import RESTAURANT from '../../fixtures/restaurant';

import RestaurantDetail from './RestaurantDetail';

describe('<RestaurantDetail />', () => {
  const renderRestaurantDetail = ({ restaurant, isFetching }) => render((
    <RestaurantDetail
      restaurant={restaurant}
      isFetching={isFetching}
    />
  ));

  context('with restaurant', () => {
    it('renders restaurant info', () => {
      const { container, getByText } = renderRestaurantDetail({
        restaurant: RESTAURANT,
        isFetching: false,
      });

      const {
        name,
        address,
        menuItems,
      } = RESTAURANT;

      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(address);

      menuItems.forEach((menu) => {
        expect(getByText(menu.name)).toBeInTheDocument();
      });
    });
  });

  context('without isFetching and with empty restaurant', () => {
    it('renders fail message', () => {
      const { container } = renderRestaurantDetail({
        restaurant: {},
        isFetching: false,
      });

      expect(container).toHaveTextContent('레스토랑 정보 조회에 실패했습니다.');
    });
  });

  context('without restaurant', () => {
    it('renders loading message', () => {
      const { container } = renderRestaurantDetail({
        restaurant: null,
        isFetching: false,
      });

      expect(container).toHaveTextContent('loading');
    });
  });

  context('with isFetching', () => {
    it('renders loading message', () => {
      const { container, queryByText } = renderRestaurantDetail({
        restaurant: null,
        isFetching: true,
      });

      expect(container).toHaveTextContent('loading');
      expect(queryByText('메뉴')).toBeNull();
    });
  });
});
