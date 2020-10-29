import React from 'react';

import { render } from '@testing-library/react';

import RestaurantMenuItems from './RestaurantMenuItems';

describe('RestaurantMenuItems', () => {
  context('with restaurant detail', () => {
    const menuItems = [
      { id: 1, name: '밥' },
      { id: 2, name: '비빔면' },
    ];

    it('renders restaurant menuItems', () => {
      const { getByText } = render((
        <RestaurantMenuItems
          menuItems={menuItems}
        />
      ));

      menuItems.forEach((menuItem) => (
        expect(getByText(`${menuItem.name}`)).not.toBeNull()
      ));
    });
  });
});
