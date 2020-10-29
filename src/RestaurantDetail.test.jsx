import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTRAURANTDETAIL from '../fixtures/restaurantDetail';

const renderRestaurantDetail = (name = '', address = '', menuItems = []) => render((
  <RestaurantDetail
    name={name}
    address={address}
    menuItems={menuItems}
  />
));

describe('RestaurantDetail', () => {
  context('레스토랑 상세정보가 주어지면,', () => {
    const restraurantDetail = RESTRAURANTDETAIL;

    it('레스토랑 이름이 출력됩니다.', () => {
      const name = RESTRAURANTDETAIL;
      const { container } = renderRestaurantDetail(name);

      expect(container).toHaveTextContent(name);
    });

    it('레스토랑 주소가 출력됩니다.', () => {
      const { address } = restraurantDetail;
      const { container } = renderRestaurantDetail(address);

      expect(container).toHaveTextContent(address);
    });

    it('레스토랑 아이템이 출력됩니다.', () => {
      const { menuItems } = restraurantDetail;
      const { container } = renderRestaurantDetail(menuItems);

      menuItems.forEach((menuItem) => {
        expect(container).toHaveTextContent(menuItem);
      });
    });
  });
});
