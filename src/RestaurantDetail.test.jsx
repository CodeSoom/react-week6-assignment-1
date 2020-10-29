import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTRAURANTDETAIL from '../fixtures/restaurantDetail';

const renderRestaurantDetail = ({ name, address, menuItems }) => render((
  <RestaurantDetail
    name={name}
    address={address}
    menuItems={menuItems}
  />
));

describe('RestaurantDetail', () => {
  it('레스토랑 이름이 출력됩니다.', () => {
    const { container } = renderRestaurantDetail(RESTRAURANTDETAIL);

    expect(container).toHaveTextContent(RESTRAURANTDETAIL.name);
  });

  it('레스토랑 주소가 출력됩니다.', () => {
    const { container } = renderRestaurantDetail(RESTRAURANTDETAIL);

    expect(container).toHaveTextContent(RESTRAURANTDETAIL.address);
  });

  it('레스토랑 아이템이 출력됩니다.', () => {
    const { container } = renderRestaurantDetail(RESTRAURANTDETAIL);

    RESTRAURANTDETAIL.menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });
});
