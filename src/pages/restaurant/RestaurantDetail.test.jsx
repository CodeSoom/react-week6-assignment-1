import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
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
  };

  const renderRestaurantDetail = () => render((
    <RestaurantDetail restaurant={restaurant} />
  ));

  context('with restaurant name', () => {
    it('renders restaurant name and address', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울 강남구/);
    });

    it('renders restaurant menu', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('without MenuItems', () => {
    it('renders no MenuItems message', () => {
      const { queryByText } = render((
        <RestaurantDetail restaurant="" />));

      expect(queryByText('Loading')).not.toBeNull();
    });
  });
});
