import { render } from '@testing-library/react';

import given from 'given2';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  beforeEach(() => {
    given('menuItems', () => []);
  });

  const renderMenuItems = () => render((
    <MenuItems
      menuItems={given.menuItems}
    />
  ));

  context('without menu items data', () => {
    given('menuItems', () => []);

    it('renders "등록된 메뉴가 없습니다."', () => {
      const { container } = renderMenuItems();

      expect(container).toHaveTextContent('등록된 메뉴가 없습니다.');
    });
  });

  context('with menu items', () => {
    given('menuItems', () => [
      { id: 1, name: '떡볶이' },
      { id: 2, name: '튀김' },
      { id: 3, name: '오뎅' },
      { id: 4, name: '컵밥' },
    ]);

    it('renders menu', () => {
      const { container } = renderMenuItems();

      ['떡볶이', '튀김', '오뎅', '컵밥'].forEach((menu) => (
        expect(container).toHaveTextContent(menu)
      ));
    });
  });
});
