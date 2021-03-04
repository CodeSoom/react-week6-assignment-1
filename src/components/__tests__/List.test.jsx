import React from 'react';

import { render } from '@testing-library/react';

import List from '../List';
import restaurantDetail from '../../../fixtures/restaurantDetail';

describe('List', () => {
  const { menuItems } = restaurantDetail;

  it('renders list', () => {
    const { getByRole } = render(
      <List
        title="메뉴"
        list={menuItems}
      />,
    );

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();

    menuItems.forEach((menuItem) => {
      expect(getByRole('list')).toHaveTextContent(menuItem.name);
    });
  });
});
