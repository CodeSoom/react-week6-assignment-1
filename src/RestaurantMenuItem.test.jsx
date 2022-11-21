import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantMenuItem from './RestaurantMenuItem';

import restaurantInfo from '../fixtures/restaurantInfo';

describe('RestaurantMenuItem', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderRestaurantMenuItem = (menuItems) => render((
    <RestaurantMenuItem menuItems={menuItems} />
  ));

  context('메뉴 아이템 데이터가 있을 시', () => {
    it('메뉴가 랜더링된다', () => {
      const { menuItems } = restaurantInfo;

      useSelector.mockImplementation((selector) => selector({
        menuItems,
      }));

      const { queryByText } = renderRestaurantMenuItem(menuItems);

      expect(queryByText(/비빔밥/)).not.toBeNull();
      expect(queryByText(/탕수육/)).not.toBeNull();
    });
  });

  context('메뉴 아이템 데이터가 없을 시', () => {
    it('"메뉴가 없어요!" 문구가 랜더링된다', () => {
      [[], null, undefined].forEach((menuItems) => {
        const { container } = renderRestaurantMenuItem(menuItems);

        expect(container).toHaveTextContent('메뉴가 없어요!');
      });
    });
  });
});
