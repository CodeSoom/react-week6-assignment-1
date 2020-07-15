import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with menu items', () => {
    it('render menu', () => {
      const menuItems = [
        { id: '1', name: '닭발' },
      ];
      const { container } = render((
        <MenuItems menuItems={menuItems} />
      ));
      expect(container).toHaveTextContent('닭발');
    });
  });
  context('without menu items', () => {
    it('render message', () => {
      [[], null, undefined, ''].forEach((menuItems) => {
        const { container } = render((
          <MenuItems menuItems={menuItems} />
        ));
        expect(container).toHaveTextContent('메뉴 없어요!');
      });
    });
  });
});
