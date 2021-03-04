import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with MenuItems', () => {
    it('renders MenuItems', () => {
      const menuItems = [{
        id: 1,
        restaurantId: 1,
        name: '비빔밥',
      }];

      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('without MenuItems', () => {
    it('renders no MenuItems message', () => {
      const { queryByText } = render(<MenuItems />);

      expect(queryByText(/메뉴가 없어요/)).not.toBeNull();
    });
  });
});
