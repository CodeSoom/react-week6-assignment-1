import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  it('render the information of restaurant', () => {
    const { container } = render((
      <Restaurant restaurant={RESTAURANT} />
    ));

    expect(container).toHaveTextContent(RESTAURANT.name);
    expect(container).toHaveTextContent(RESTAURANT.address);

    const menuList = RESTAURANT.menuItems;
    menuList.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
